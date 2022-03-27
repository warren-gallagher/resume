<script lang="ts">
    import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, DropdownItem, Container, Icon } from 'sveltestrap';
    import AboutDialog from '$lib/components/AboutDialog.svelte';

    let menuIsOpen = false;
    let showAboutDialog = false;

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

<Navbar color="primary" light expand="md">
    <NavbarBrand class="text-white" href="/contact" >Warren Gallagher</NavbarBrand>
    <NavbarToggler class="bg-white" on:click={toggleNavbarClicked} />
    <Collapse bind:isOpen={menuIsOpen} navbar expand="md" on:update={handleCollapseUpdateEvent}>
        <Nav class="ms-auto" navbar>
            <NavItem >
                <NavLink class="text-white" href="/">Profile</NavLink>
            </NavItem>
            <NavItem>
                <NavLink class="text-white" href="/experience">Experience</NavLink>
            </NavItem>
            <NavItem>
                <NavLink class="text-white" href="/technologies">Technologies</NavLink>
            </NavItem>
            <NavItem>
                <NavLink class="text-white" href="/contact">Contact</NavLink>
            </NavItem>
            <NavItem>
                <NavLink class="text-white" href="/print" target="_blank">Print</NavLink>
            </NavItem>
            <NavItem>
                <NavLink class="text-white" href="/about" on:click={aboutClicked}><Icon name="info-circle"/></NavLink>
            </NavItem>
        </Nav>
    </Collapse>
</Navbar>

<Container fluid >
    <slot>

    </slot>
</Container>
{#if showAboutDialog} 
    <AboutDialog bind:isOpen={showAboutDialog}/>
{/if}
