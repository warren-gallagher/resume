<script context="module" lang="ts">
    import {getContact} from '$lib/models/Contact';
    import type {Contact} from '$lib/models/Contact';

    /** @type {import('./contact').Load} */
    export async function load({ params, fetch, session, stuff }) {
        return {
            status: 200,
            props: {
                contact: await getContact()
            }
        };
    }
  </script>

  <script lang="ts">
    import SvelteMarkdown from 'svelte-markdown';
    import { Table, Icon, Image } from 'sveltestrap';

    export let contact: Contact;

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
<div class="text-center">
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