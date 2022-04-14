  <script lang="ts">
    import SvelteMarkdown from 'svelte-markdown';
    import { Accordion, AccordionItem } from 'sveltestrap';
    import type {Contact} from '$lib/models/Contact';
    import type {Experience} from '$lib/models/Experience';
    import {onMount} from 'svelte';
    import {services} from '$lib/services/services';

    export let contact: Contact;
    export let experience: Experience[];

    async function onLoad() {
        contact = await $services.contactService.getContact();
        experience = await $services.experienceService.getExperience();
    }

</script>

<style>
    th {
        width: 300px;
    }
    td {
        width: 300px;
    }
</style>

{#await onLoad()}
{:then}
<div class="text-center">
    <h3>{contact.name} - Experience</h3>
</div>

<Accordion >
    {#each experience as experienceItem}
        <AccordionItem >
            <table  slot="header">
                <tbody>
                    <tr>
                        <th >
                            {experienceItem.companyName}
                        </th>
                        <td>
                            {experienceItem.workTitle}
                        </td>
                        <td>
                            {experienceItem.workDuration}
                        </td>
                    </tr>
                </tbody>
            </table>
            <SvelteMarkdown source={experienceItem.markdown} />
        </AccordionItem>
    {/each}
</Accordion>
{/await}