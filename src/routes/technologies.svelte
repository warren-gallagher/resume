<script context="module" lang="ts">
    import {getContact} from '$lib/models/Contact';
    import type {Contact} from '$lib/models/Contact';
    import {getTechnologies} from '$lib/models/Technology';
    import type {Technology} from '$lib/models/Technology';

    /** @type {import('./technologies').Load} */
    export async function load({ params, fetch, session, stuff }) {
        return {
            status: 200,
            props: {
                contact: getContact(),
                technologies: getTechnologies()
            }
        };
    }
  </script>

  <script lang="ts">
    import SvelteMarkdown from 'svelte-markdown';
    import { Accordion, AccordionItem } from 'sveltestrap';

    export let contact: Contact;
    export let technologies: Technology[];

</script>

<style>
</style>

<div class="text-center">
    <h3>{contact.name} - Technology</h3>
</div>
<Accordion >
    {#each technologies as technology}
        <AccordionItem >
            <table  slot="header">
                <tbody>
                    <tr>
                        <td>
                            {technology.category}
                        </td>
                    </tr>
                </tbody>
            </table>
            <SvelteMarkdown source={technology.markdown} />
        </AccordionItem>
    {/each}
</Accordion>