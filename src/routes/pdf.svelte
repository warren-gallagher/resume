<script context="module" lang="ts">
    import {getContact} from '$lib/models/Contact';
    import type {Contact} from '$lib/models/Contact';
    import {getProfile} from '$lib/models/Profile';
    import type {Profile} from '$lib/models/Profile';
    import {getProjects} from '$lib/models/Project';
    import type {Project} from '$lib/models/Project';
    import {getExperience} from '$lib/models/Experience';
    import type {Experience} from '$lib/models/Experience';
    import {getTechnologies} from '$lib/models/Technology';
    import type {Technology} from '$lib/models/Technology';

    /** @type {import('./pdf').Load} */
    export async function load({ params, fetch, session, stuff }) {
        return {
            status: 200,
            props: {
                contact: getContact(),
                profile: getProfile(),
                projects: getProjects(),
                experience: getExperience(),
                technologies: getTechnologies()
            }
        };
    }
</script>

<script lang="ts" >
    import {onMount} from 'svelte';
    import { Button } from 'sveltestrap';
    import {pdfMake} from 'pdfmake/build/pdfmake.js';
    import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';

     
    export let contact: Contact;
    export let profile: Profile;
    //export let projects: Project[];
    export let experience: Experience[];
    export let technologies: Technology[];

    onMount(() => {
        pdfMake.vfs = pdfFonts.pdfMake.vfs;
    });

    // create Profile portion of the resume into the PDF document
    function generateProfileForPDF() {
        var content = [{ text: 'Profile', style: 'h1' }, { text: ' ' }]; 
        
        const paragraphs = profile.markdown.split('\n\n');
        const masaged = paragraphs.map(function(p){return p.replace(/(\n)/gm, '')});
        for( const paragraph of masaged ) {
            content.push( { text: paragraph }, { text: '\n' } );
        }
        return content;
    }
    
    // create Experience portion of the resume into the PDF document
   function generateExperienceForPDF() {
        var content = [{ text: 'Experience', style: 'h1' }, { text: ' ' }];
        
        for( const experienceItem of experience ) {
            content.push( { text: experienceItem.companyName + ' - ' + experienceItem.workTitle + ' : ' + experienceItem.workDuration, style: 'h2' }, { text: ' ' } );
            
            const paragraphs = experienceItem.markdown.split('\n\n');
            const masaged = paragraphs.map(function(p){return p.replace(/(\n)/gm, '')});
            for( const paragraph of masaged ) {
                content.push( { text: paragraph, style: 'experienceParagraph' } ); //, { text: ' ' }
            }
        }
            
        return content;
    }
    // create Technologies portion of the resume into the PDF document
    function generateTechnologiesForPDF() {
        var content : any[] = [{ text: 'Technologies', style: 'h1' }, { text: ' ' }];
        
        for( const technology of technologies ) {
            content.push( { text: technology.category, style: 'h2' } );
            const paragraphs = technology.markdown.split('\n\n');
            const masaged = paragraphs.map(function(p){return p.replace(/(\n)/gm, '')});
            content.push( { ul: masaged } );
            content.push( { text: ' ' } );  
        }
        return content;
    }
        // create a PDF version of the resume in a new window/tab using pdfMake
    function generatePDF(event) {
        var docDefinition = { 
            // a string or { width: number, height: number }
            pageSize: 'A4',

            // by default we use portrait, you can change it to landscape if you wish
            pageOrientation: 'portrait',

            // [left, top, right, bottom] or [horizontal, vertical] or just a number for equal margins
            pageMargins: [ 40, 40 ],
            
            header: [
                //{ text: ' ' }, // workaround - putting in a blank line to force some padding between the header and the top of the page
                {
                    columns: [
                        { text: contact.name, style: 'pageHeader' },
                        { text: contact.emailAddr, style: 'pageHeader'  },
                        { text: contact.mobilePhone, style: 'pageHeader'  }
                    ]
                }
            ],
                        
            content: [],
            
            styles: {
                pageHeader: {
                    fontSize: 12,
                    alignment: 'center',
                    margin: [0,10,0,10],
                },
                h1: {
                   fontSize: 18,
                   bold: true,
                   alignment: 'center',
                   color: 'blue',
                   decoration: 'underline'
                },   
                h2: {
                   fontSize: 14,
                   bold: true,
                   italics: true,
                   underline: true,
                   color: 'blue'
                },
                experienceParagraph: {
                    fontSize: 12,
                    margin: [10,0,10,10]
                }  
            }
        };
        
        var profileParagraphs = generateProfileForPDF();
        for( var i=0; i < profileParagraphs.length; i++ )
        {
            docDefinition.content.push( profileParagraphs[i] );
        }

        var experienceParagraphs = generateExperienceForPDF();
        for( var i=0; i < experienceParagraphs.length; i++ )
        {
            docDefinition.content.push( experienceParagraphs[i] );
        }

        var technologiesParagraphs = generateTechnologiesForPDF();
        for( var i=0; i < technologiesParagraphs.length; i++ )
        {
            docDefinition.content.push( technologiesParagraphs[i] );
        }

        // open the PDF in a new window
        //pdfMake.createPdf(docDefinition).open();
        pdfMake.createPdf(docDefinition).download(`Resume ${contact.name}.pdf`);
    }

</script>

<div class="text-center">
    <h3>{contact.name} - PDF</h3>

    <Button color="primary" on:click={generatePDF} >Generate PDF</Button>
</div>