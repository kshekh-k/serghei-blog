/*
document.addEventListener("DOMContentLoaded", () => {
    const menuItems = Array.from(document.querySelectorAll(".menu-item"));
    const mainListItems = Array.from(document.querySelectorAll(".main-list-item"));
    const mainSections = Array.from(document.querySelectorAll(".main-topic"));
    const sections = Array.from(document.querySelectorAll(".sub-title"));
  console.log(mainListItems.length)
 
    // Add smooth scrolling on click
    menuItems.map(item => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = item.getAttribute("href").slice(1);
        document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
      });
    });

    // Update active menu on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Remove all active classes
            menuItems.map(item => item.classList.remove("text-primary", "after:!opacity-100"));
            mainListItems.map(item => item.classList.remove("dropdown-open"));

            const id = entry.target.getAttribute("id");
            const targetMenuItem = document.querySelector(`.menu-item[href="#${id}"]`); 
            const parentMenuItem = targetMenuItem?.closest("ul")?.previousElementSibling; 
            const parentMenuItemLi = targetMenuItem?.closest(".main-list-item"); 

            // Add active class to the current menu
            targetMenuItem?.classList.add("text-primary");
            parentMenuItemLi?.classList.add("dropdown-open");

            // Add active class to the parent menu, if applicable
            parentMenuItem?.classList.add("after:!opacity-100", "text-primary");
            
            
          }
        });
      }, { threshold: 0.6 });

    mainSections.map(main => observer.observe(main));
    sections.map(section => observer.observe(section));
  });
*/
  const menu = document.getElementById('menu');
  const menuItems = document.querySelectorAll('.menu-item');
  const sections = document.querySelectorAll('.main-content div[id]');
     

    menu.addEventListener('click', (event) => {
        const target = event.target;
  
        // Check if a menu item was clicked
        if (target.classList.contains('menu-item')) {
          event.preventDefault();
  
          // Remove 'selected-item' and 'selected-parent' from all menu items
          menuItems.forEach(item => item.classList.remove('text-primary'));
          document.querySelectorAll('.main-list-item').forEach(item => item.classList.remove('selected-parent'));
  
          // Add 'selected-item' to clicked item
          target.classList.add('text-primary');
  
          // Add 'selected-parent' to the closest main-list-item
          const parentItem = target.closest('.main-list-item');
          if (parentItem) {
            parentItem.classList.add('selected-parent');
          }
  
          // Smooth scroll to the target section
          const sectionId = target.getAttribute('href').substring(1);
          const targetSection = document.getElementById(sectionId);
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });




    // Handle menu highlighting on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.6 // Trigger when 60% of the section is visible
      };
  
      const observerCallback = (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Remove 'selected-item' and 'selected-parent' from all menu items
            menuItems.forEach(item => item.classList.remove('text-primary'));
            document.querySelectorAll('.main-list-item').forEach(item => item.classList.remove('selected-parent'));
  
            // Find the corresponding menu link
            const id = entry.target.id;
            const menuLink = document.querySelector(`.menu-item[href="#${id}"]`);
            if (menuLink) {
              menuLink.classList.add('text-primary');
  
              // Add 'selected-parent' to the closest main-list-item
              const parentItem = menuLink.closest('.main-list-item');
              if (parentItem) {
                parentItem.classList.add('selected-parent');
              }
            }
          }
        });
      };
  
      const observer = new IntersectionObserver(observerCallback, observerOptions);
      sections.forEach(section => observer.observe(section));