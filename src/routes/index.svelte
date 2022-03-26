<script context="module" lang="ts">
    import {getContact} from '$lib/models/Contact';
    import type {Contact} from '$lib/models/Contact';
    import {getProfile} from '$lib/models/Profile';
    import type {Profile} from '$lib/models/Profile';

    /** @type {import('./index').Load} */
    export async function load({ params, fetch, session, stuff }) {
        return {
            status: 200,
            props: {
                contact: getContact(),
                profile: getProfile()
            }
        };
    }
  </script>

  <script lang="ts">
    import SvelteMarkdown from 'svelte-markdown';

    export let contact: Contact;
    export let profile: Profile;

</script>
<div class="text-center">
    <h3>{contact.name} - Profile</h3>
    <SvelteMarkdown source={profile.markdown} />
</div>

