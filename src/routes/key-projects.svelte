<script context="module" lang="ts">
    import {getContact} from '$lib/models/Contact';
    import type {Contact} from '$lib/models/Contact';
    import {getProjects} from '$lib/models/Project';
    import type {Project} from '$lib/models/Project';

    /** @type {import('./key-projects').Load} */
    export async function load({ params, fetch, session, stuff }) {
        return {
            status: 200,
            props: {
                contact: getContact(),
                projects: getProjects()
            }
        };
    }
  </script>

  <script lang="ts">
    import SvelteMarkdown from 'svelte-markdown';
    import { Accordion, AccordionItem } from 'sveltestrap';

    export let contact: Contact;
    export let projects: Project[];

</script>

<h3>{contact.name} - Key Projects</h3>

<Accordion >
    {#each projects as project}
        <AccordionItem >
            <h6 class="" slot="header">{project.title}</h6>
            <SvelteMarkdown source={project.markdown} />
        </AccordionItem>
    {/each}
</Accordion>