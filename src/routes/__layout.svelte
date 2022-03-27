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

<Navbar color="light" light expand="md">
    <NavbarBrand href="/contact" >Warren Gallagher</NavbarBrand>
    <NavbarToggler on:click={toggleNavbarClicked} />
    <Collapse bind:isOpen={menuIsOpen} navbar expand="md" on:update={handleCollapseUpdateEvent}>
        <Nav class="ms-auto" navbar>
            <NavItem>
                <NavLink href="/">Profile</NavLink>
            </NavItem>
            <!--NavItem>
                <NavLink href="/key-projects">Key Projects</NavLink>
            </NavItem-->
            <NavItem>
                <NavLink href="/experience">Experience</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/technologies">Technologies</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/contact">Contact</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/print" target="_blank">Print</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/about" on:click={aboutClicked}><Icon name="info-circle"/></NavLink>
            </NavItem>
        </Nav>
    </Collapse>
</Navbar>
<DropdownItem divider />
<Container fluid >
    <slot>

    </slot>
</Container>
{#if showAboutDialog} 
    <AboutDialog bind:isOpen={showAboutDialog}/>
{/if}
