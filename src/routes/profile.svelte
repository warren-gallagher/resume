  <script lang="ts">
    import SvelteMarkdown from 'svelte-markdown';
    import type {Contact} from '$lib/models/Contact';
    import type {Profile} from '$lib/models/Profile';
    import {onMount} from 'svelte';
    import {services} from '$lib/services/services';
 
    export let contact: Contact;
    export let profile: Profile;

    onMount(() => {
    })

    async function onLoad() {
        contact = await $services.contactService.getContact();
        profile = await $services.profileService.getProfile();
    }
</script>

{#await onLoad()}
{:then}
<div class="text-center">
    <h3>{contact.name} - Profile</h3>
    <SvelteMarkdown source={profile.markdown} />
</div>
{/await}
