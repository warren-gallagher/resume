<script context="module" lang="ts">
    import {getContact} from '$lib/models/Contact';
    import type {Contact} from '$lib/models/Contact';
    import {getExperience} from '$lib/models/Experience';
    import type {Experience} from '$lib/models/Experience';

    /** @type {import('./experience').Load} */
    export async function load({ params, fetch, session, stuff }) {
        return {
            status: 200,
            props: {
                contact: getContact(),
                experience: getExperience()
            }
        };
    }
  </script>

  <script lang="ts">
    import SvelteMarkdown from 'svelte-markdown';
    import { Accordion, AccordionItem } from 'sveltestrap';

    export let contact: Contact;
    export let experience: Experience[];

</script>

<style>
    th {
        width: 300px;
    }
    td {
        width: 300px;
    }
</style>
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
