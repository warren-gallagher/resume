  <script lang="ts">
    import SvelteMarkdown from 'svelte-markdown';
    import { Table, Icon, Image } from 'sveltestrap';
    import {onMount} from 'svelte';
    import {services} from '$lib/services/services';
    import type {Contact} from '$lib/models/Contact';

    let contact : Contact;
    const mode = import.meta.env.MODE;

    onMount(() => {
    })
    
    async function onLoad() {
        contact = await $services.contactService.getContact();
    }

</script>

<style>
    img {
        object-fit: cover;
        border-radius: 50%;
        height: 100px;
        width: 100px;
    }
    a {
        text-decoration: none;
    }
</style>
{#await onLoad()}
    Loading...
{:then}
<div class="text-center">
    <h1>{mode}</h1>
<h3>{contact.name} - Contact</h3>

<img alt={`${contact.name} Photo`} src="/avatar-photo-400x400.jpg" />

<Table>
    <tbody>
        <tr>
            <td><Icon name="envelope-fill"/><a href={contact.emailURL}>{` ${contact.emailAddr}`}</a></td>
        </tr>
        <tr>
            <td><Icon name="telephone-fill"/><a href={contact.mobilePhoneURL}>{contact.mobilePhone}</a></td>
        </tr>
        <tr>
            <td><Icon name="github"/><a href={contact.githubURL} target="_blank" >{contact.githubURL}</a></td>
        </tr>
        <tr>
            <td><Icon class="mr-2" name="twitter"/><a href={contact.twitterURL} target="_blank" >{contact.twitterURL}</a></td>
        </tr>
        <tr>
            <td><Icon name="linkedin"/><a href={contact.linkedInURL} target="_blank" >{contact.linkedInURL}</a></td>
        </tr>
    </tbody>
</Table>
</div>
{/await}