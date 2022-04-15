  <script lang="ts">
    import SvelteMarkdown from 'svelte-markdown';
    import { Accordion, AccordionItem } from 'sveltestrap';
    import type {Contact} from '$lib/models/Contact';
    import type {Technology} from '$lib/models/Technology';
    import {onMount} from 'svelte';
    import {services} from '$lib/services/services';

    let contact: Contact;
    let technologies: Technology[];

    async function onLoad() {
        contact = await $services.contactService.getContact();
        technologies = await $services.technologyService.getTechnologies();
    }

</script>

<style>
</style>

{#await onLoad()}
    Loading...
{:then}
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
{/await}