const navBarHTML = `<nav class="navbar navbar-expand-lg bg-body-tertiary p-0">
<div class="container-fluid">
  <a class="navbar-brand pt-0 mb-2" href="index.html">
    <img src= "images/libevent3.png" alt="libevent" width="90" height="auto" class="d-inline-block align-text-top">
  </a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
   </button>
   <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
         <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="download.html">Download</a>
         </li>
      </ul>
      <span class="navbar-text">An Event Notification Library</span>
   </div>
</div>
</nav>`;

const googleTag = `<!-- Google tag (gtag.js) -->
<script async="" src="https://www.googletagmanager.com/gtag/js?id=G-M3CEY418LQ" type="text/javascript"></script>
<script type="text/javascript">
   window.dataLayer = window.dataLayer || [];
   function gtag(){dataLayer.push(arguments);}
   gtag('js', new Date());
   gtag('config', 'G-M3CEY418LQ');
</script>`;

const footer = `<nav class="nav bg-body-tertiary position-relative" id="coda">
<li class= "nav-item pt-2 px-3" id="end">
   <address><a class="pt-1 link-primary icon-link active pb-0 link-underline-opacity-0 link-underline-opacity-25-hover" href="mailto:nickm@alum.mit.edu">
      <svg class="bi" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
         <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
      <use xmlns="http://www.w3.org/2000/svg"></use></svg>
      Nick Mathewson
   </a></address>
   <address><a class="link-primary icon-link active py-0 link-underline-opacity-0 link-underline-opacity-25-hover" href="mailto:a3at.mail@gmail.com">
      <svg class="bi" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
         <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
      <use xmlns="http://www.w3.org/2000/svg"></use></svg>
      Azat Khuzhin
   </a></address>
   <address><a class="link-primary icon-link active py-0 link-underline-opacity-0 link-underline-opacity-25-hover" href="mailto:provos@citi.umich.edu">
      <svg class="bi" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
         <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
      <use xmlns="http://www.w3.org/2000/svg"></use></svg>
      Niels Provos
   </a></address>
</li>
<li class="navbar-item position-absolute top-0 end-0 pt-4" id="end">
   <p class="text-end">
      (Please do not mail us directly for technical support. Instead, please use the mailing list or the IRC channel.)<br>
      <!-- Created: Mon Mar 11 12:43:06 EST 2002 -->
      <!-- hhmts start -->
      Last modified: 7 Apr 2024 <!-- hhmts end -->
   </p>
</li>
</nav> <!-- end of coda -->`;


document.body.insertAdjacentHTML("afterbegin", navBarHTML); // insert nav bar html after start of body
document.body.insertAdjacentHTML("afterbegin", googleTag);  // insert google tag script after start of body
document.body.insertAdjacentHTML("afterend", footer);