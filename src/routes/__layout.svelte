<script lang="ts">
    import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, DropdownItem, Container, Icon } from 'sveltestrap';
    import AboutDialog from '$lib/components/AboutDialog.svelte';
    import {services} from '$lib/services/services';
    import type {Contact} from '$lib/models/Contact';

    export let contact: Contact;

    let menuIsOpen = false;
    let showAboutDialog = false;

    async function onLoad() {
        contact = await $services.contactService.getContact();
    }

    function handleCollapseUpdateEvent(event) {
        menuIsOpen = event.detail.menuIsOpen;
    }

    function toggleNavbarClicked(event) {
        menuIsOpen = !menuIsOpen
    }

    function aboutClicked(event) {
        event.preventDefault();
        showAboutDialog = true;
    }
</script>

<svelte:head>
</svelte:head>

{#await onLoad()}
{:then}
<Navbar color="primary" light expand="md" class="d-print-none">
    <NavbarBrand class="text-white" href="/contact" >{contact.name}</NavbarBrand>
    <NavbarToggler class="bg-white" on:click={toggleNavbarClicked} />
    <Collapse bind:isOpen={menuIsOpen} navbar expand="md" on:update={handleCollapseUpdateEvent}>
        <Nav class="ms-auto" navbar>
            <NavItem >
                <NavLink class="text-white" href="/">Contact</NavLink>
            </NavItem>
            <NavItem>
                <NavLink class="text-white" href="/profile">Profile</NavLink>
            </NavItem>
            <NavItem>
                <NavLink class="text-white" href="/experience">Experience</NavLink>
            </NavItem>
            <NavItem>
                <NavLink class="text-white" href="/technologies">Technologies</NavLink>
            </NavItem>
            <NavItem>
                <NavLink class="text-white" href="/print" >Print</NavLink>
            </NavItem>
            <NavItem>
                <NavLink class="text-white" href="/about" on:click={aboutClicked}><Icon name="info-circle"/></NavLink>
            </NavItem>
        </Nav>
    </Collapse>
</Navbar>
{/await}
<Container fluid >
    <slot>

    </slot>
</Container>
{#if showAboutDialog} 
    <AboutDialog bind:isOpen={showAboutDialog}/>
{/if}
