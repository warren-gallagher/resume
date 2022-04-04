<script context="module" lang="ts">
    import {getConfig} from '$lib/models/Config';
    import type {Config} from '$lib/models/Config';
    import {getContact} from '$lib/models/Contact';
    import type {Contact} from '$lib/models/Contact';
    import {getProfile} from '$lib/models/Profile';
    import type {Profile} from '$lib/models/Profile';
    import {getExperience} from '$lib/models/Experience';
    import type {Experience} from '$lib/models/Experience';
    import {getTechnologies} from '$lib/models/Technology';
    import type {Technology} from '$lib/models/Technology';

    /** @type {import('./pdf').Load} */
    export async function load({ params, fetch, session, stuff }) {
        return {
            status: 200,
            props: {
                config: getConfig(),
                contact: getContact(),
                profile: getProfile(),
                experience: getExperience(),
                technologies: getTechnologies()
            }
        };
    }
</script>

<script lang="ts" >
    import {onMount} from 'svelte';
    import { Container, Table, Button, Icon } from 'sveltestrap';
    import SvelteMarkdown from 'svelte-markdown';

    export let config : Config;
    export let contact: Contact;
    export let profile: Profile;
    export let experience: Experience[];
    export let technologies: Technology[];

    onMount(() => {
        setTimeout(function() {
            window.print();
        }, 1000);
    });

</script>

<style>
    .font-size-xs {
        font-size: x-small;
    }
    img {
        object-fit: cover;
        border-radius: 50%;
        height: 100px;
        width: 100px;
    }
</style>

<div class="pt-2">
    <Container>
        <h4 class="text-primary text-center">{contact.name}</h4>
        <Container>
            <div class="font-size-xs text-center" >
                <img class="img-circle" alt={`${contact.name} Photo`} src="/avatar-photo-400x400.jpg" />
                <div class="pt-2"><Icon name="envelope-fill"></Icon><span class="pl-2">{contact.emailAddr}</span></div>
                <div class="pt-2"><Icon name="telephone-fill"></Icon><span class="pl-2">{contact.mobilePhone}</span></div>
                <div class="pt-2"><Icon name="linkedin"></Icon><span class="pl-2">{contact.linkedInURL}</span></div>
                <div class="pt-2"><Icon name="github"></Icon><span class="pl-2">{contact.githubURL}</span></div>
                <div class="pt-2"><Icon name="twitter"></Icon><span class="pl-2">{contact.twitterURL}</span></div>
            </div>
        </Container>

        <h5 class="pt-2 text-primary underline text-center"><u>Profile</u></h5>
        <Container>
            <div class="font-size-xs" >
                <SvelteMarkdown source={profile.markdown} />
            </div>
        </Container>

        <h5 class="text-primary underline text-center"><u>Experience</u></h5>
        {#each experience as experienceItem}
            <h6 class="text-primary">{experienceItem.companyName} - {experienceItem.workTitle} : {experienceItem.workDuration}</h6>
            <Container>
                <div class="font-size-xs" >
                    <SvelteMarkdown source={experienceItem.markdown} />
                </div>
            </Container>
        {/each}

        <h5 class="text-primary underline text-center"><u>Technologies</u></h5>
        {#each technologies as technology}
            <h6 class="text-primary">{technology.category}</h6>
            <Container class="text-sm">
                <div class="font-size-xs" >
                    <SvelteMarkdown source={technology.markdown} />
                </div>
            </Container>
        {/each}

        <p class="text-center font-size-xs">Printable Resume generated from interactive resume web site at {config.deploymentURL}</p>
        <p class="text-center font-size-xs"><Icon name="github" /> repository available at {config.repositoryURL}</p>
    </Container>
</div>
