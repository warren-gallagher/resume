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
    <title>Resume - Warren Gallagher</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
    <style>
        /* prevent bootstrap from drawing the blue glow around input fields when in focus */
        .form-control:focus {
            box-shadow: none; 
        }
        .input-group-text {
            background-color: white;
            border: none;
            right: 
        }

    </style>
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
                <NavLink href="/pdf">PDF</NavLink>
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
