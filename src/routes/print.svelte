<script lang="ts" >
    import { Container, Table, Button, Icon } from 'sveltestrap';
    import SvelteMarkdown from 'svelte-markdown';
    import type {Config} from '$lib/models/Config';
    import type {Contact} from '$lib/models/Contact';
    import type {Profile} from '$lib/models/Profile';
    import type {Experience} from '$lib/models/Experience';
    import type {Technology} from '$lib/models/Technology';
    import {onMount} from 'svelte';
    import {services} from '$lib/services/services';

    let config : Config;
    let contact: Contact;
    let profile: Profile;
    let experience: Experience[];
    let technologies: Technology[];

    async function onLoad() {
        config = await $services.configService.getConfig();
        contact = await $services.contactService.getContact();
        profile = await $services.profileService.getProfile();
        experience = await $services.experienceService.getExperience();
        technologies = await $services.technologyService.getTechnologies();
        setTimeout(function() {
            window.print();
        }, 1000);
    }

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

{#await onLoad()}
    Loading...
{:then}
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

        <!--p class="text-center font-size-xs">Printable Resume generated from interactive resume web site at {config.deploymentURL}</p-->
        <p class="text-center font-size-xs"><Icon name="github" /> repository available at {config.repositoryURL}</p>
    </Container>
</div>
{/await}