    
    var pi = document.getElementById("pi");
    var aq = document.getElementById("aq");
    var pe = document.getElementById("pe");
    var ri = document.getElementById("ri");
    var pub = document.getElementById("pub");
    var proj = document.getElementById("proj");
    var train = document.getElementById("train");
    var skl = document.getElementById("skl");
    var mem = document.getElementById("mem");

    var pinfo = document.getElementById("personal_info");
    var acqu = document.getElementById("academic_qualification");
    var profex = document.getElementById("professional_experience");
    var rscin = document.getElementById("research_interest");
    var publication = document.getElementById("publications");
    var project = document.getElementById("projects");
    var training = document.getElementById("training");
    var skills = document.getElementById("skills");
    var Membership = document.getElementById("Membership");

  function display_pro(){
    if (pinfo.style.display === "none") {
      pinfo.style.display = "block";
      acqu.style.display = "none";
      profex.style.display = "none";
      rscin.style.display = "none";
      publication.style.display = "none";
      project.style.display = "none";
      training.style.display = "none";
      skills.style.display = "none";
      Membership.style.display = "none";

      design_selected_btn(pi);

      design_other_btns(aq);design_other_btns(pe);design_other_btns(ri);design_other_btns(pub);
      design_other_btns(proj);design_other_btns(train);design_other_btns(skl);design_other_btns(mem);
    } 
    }

  function display_aq() {
    if (acqu.style.display === "none") {
      pinfo.style.display = "none";
      acqu.style.display = "block";
      profex.style.display = "none";
      rscin.style.display = "none";
      publication.style.display = "none";
      project.style.display = "none";
      training.style.display = "none";
      skills.style.display = "none";
      Membership.style.display = "none";

      design_selected_btn(aq);

      design_other_btns(pi);design_other_btns(pe);design_other_btns(ri);design_other_btns(pub);
      design_other_btns(proj);design_other_btns(train);design_other_btns(skl);design_other_btns(mem);
    } 
  }

  function display_pe() {
    if (profex.style.display === "none") {
      pinfo.style.display = "none";
      acqu.style.display = "none";
      profex.style.display = "block";
      rscin.style.display = "none";
      publication.style.display = "none";
      project.style.display = "none";
      training.style.display = "none";
      skills.style.display = "none";
      Membership.style.display = "none";

      design_selected_btn(pe);

      design_other_btns(pi);design_other_btns(aq);design_other_btns(ri);design_other_btns(pub);
      design_other_btns(proj);design_other_btns(train);design_other_btns(skl);design_other_btns(mem);
    } 
  }

  function display_ri() {
    if (rscin.style.display === "none") {
      pinfo.style.display = "none";
      acqu.style.display = "none";
      profex.style.display = "none";
      rscin.style.display = "block";
      publication.style.display = "none";
      project.style.display = "none";
      training.style.display = "none";
      skills.style.display = "none";
      Membership.style.display = "none";

      design_selected_btn(ri);

      design_other_btns(pi);design_other_btns(aq);design_other_btns(pe);design_other_btns(pub);
      design_other_btns(proj);design_other_btns(train);design_other_btns(skl);design_other_btns(mem);
    } 
  }

  function display_pub() {
    if (publication.style.display === "none") {
      pinfo.style.display = "none";
      acqu.style.display = "none";
      profex.style.display = "none";
      rscin.style.display = "none";
      publication.style.display = "block";
      project.style.display = "none";
      training.style.display = "none";
      skills.style.display = "none";
      Membership.style.display = "none";

      design_selected_btn(pub);

      design_other_btns(pi);design_other_btns(aq);design_other_btns(pe);design_other_btns(ri);
      design_other_btns(proj);design_other_btns(train);design_other_btns(skl);design_other_btns(mem);
    } 
  }

  function display_proj() {
    if (project.style.display === "none") {
      pinfo.style.display = "none";
      acqu.style.display = "none";
      profex.style.display = "none";
      rscin.style.display = "none";
      publication.style.display = "none";
      project.style.display = "block";
      training.style.display = "none";
      skills.style.display = "none";
      Membership.style.display = "none";

      design_selected_btn(proj);

      design_other_btns(pi);design_other_btns(aq);design_other_btns(pe);design_other_btns(ri);
      design_other_btns(pub);design_other_btns(train);design_other_btns(skl);design_other_btns(mem);
    } 
  }

  function display_train() {
    if (training.style.display === "none") {
      pinfo.style.display = "none";
      acqu.style.display = "none";
      profex.style.display = "none";
      rscin.style.display = "none";
      publication.style.display = "none";
      project.style.display = "none";
      training.style.display = "block";
      skills.style.display = "none";
      Membership.style.display = "none";

      design_selected_btn(train);

      design_other_btns(pi);design_other_btns(aq);design_other_btns(pe);design_other_btns(ri);
      design_other_btns(pub);design_other_btns(proj);design_other_btns(skl);design_other_btns(mem);
    } 
  }

  function display_skl() {
    if (skills.style.display === "none") {
      pinfo.style.display = "none";
      acqu.style.display = "none";
      profex.style.display = "none";
      rscin.style.display = "none";
      publication.style.display = "none";
      project.style.display = "none";
      training.style.display = "none";
      skills.style.display = "block";
      Membership.style.display = "none";

      design_selected_btn(skl);

      design_other_btns(pi);design_other_btns(aq);design_other_btns(pe);design_other_btns(ri);
      design_other_btns(pub);design_other_btns(proj);design_other_btns(train);design_other_btns(mem);
    } 
  }

  function display_mem() {
    if (Membership.style.display === "none") {
      pinfo.style.display = "none";
      acqu.style.display = "none";
      profex.style.display = "none";
      rscin.style.display = "none";
      publication.style.display = "none";
      project.style.display = "none";
      training.style.display = "none";
      skills.style.display = "none";
      Membership.style.display = "block";

      design_selected_btn(mem);

      design_other_btns(pi);design_other_btns(aq);design_other_btns(pe);design_other_btns(ri);
      design_other_btns(pub);design_other_btns(proj);design_other_btns(train);design_other_btns(skl);
    } 
  }


  function design_selected_btn(x){
    x.style.backgroundColor = "white";
    x.style.color = "black";
    // x.style.opacity="1";
  }

  function design_other_btns(y){
    y.style.backgroundColor = "#7a6f6f";
    y.style.color = "white";
  }



 //--------------------------Topbar
 const top_bar = document.querySelector(".top_bar");
//  const title_name = document.querySelector(".title_name");
//  const nav = document.querySelector(".nav");

 top_bar.addEventListener("click", e => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
});

window.addEventListener('scroll', e => {
  end_part = (top_bar.style.display = window.scrollY <= 42);
  start_part = (top_bar.style.display = window.scrollY > 40);
  if ( start_part) {
   top_bar.style.opacity = "0.75";
   top_bar.style.transition = "1s opacity";
  } 
  else { 
    top_bar.style.opacity = "1";
    top_bar.style.transition = "1s opacity";
  }
});
// end top bar

//menubar start


// var menu = document.getElementById("menu");
// var menubar = document.getElementById("menubar");
//  window.onclick(menu){
//     if (menubar.style.display === "none") {
//       menubar.style.display = "block";
//       menubar.style.transition = "4s opacity";
//     } 
//     else{
//       menubar.style.display = "none";
//       menubar.style.transition = "4s opacity";
//     }
//   }


  function display_menubar(){
    var menubar = document.getElementById("menubar");
    if (menubar.style.display === "none") {
      menubar.style.display = "block";
      menubar.style.transition = "4s opacity";
    } 
    else{
      menubar.style.display = "none";
      menubar.style.transition = "4s opacity";
    }
    }
// show and hide
    // function show(id) {
    //   var menu= document.getElementById(menu)
    //   var menubar= document.getElementById(menubar)
    //   if (id == menu){
    //   document.getElementById(id).style.visibility = "visible";
    //   }
    //   else if (id == menubar){
    //     document.getElementById(id).style.visibility = "visible";
    //     }
    //   else{
    //     menubar.style.visibility = "hidden";
    //   }
    // }
    function hide(id) {
      document.getElementById(id).style.visibility = "hidden";
    }

//end menubar




//--------------------------scroll_btn
const btnScrollToTop = document.querySelector(".backTop");

// scroll to top of page when button clicked
btnScrollToTop.addEventListener("click", e => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
});

// toggle 'scroll to top' based on scroll position
window.addEventListener('scroll', e => {
  end_part = (btnScrollToTop.style.display = window.scrollY <= 42);
  start_part = (btnScrollToTop.style.display = window.scrollY > 40);
  if ( start_part) {
    btnScrollToTop.style.display = 'block';
    btnScrollToTop.style.opacity = "1";
    // btnScrollToTop.style.transition = "1s opacity";
  } 
  // else if(end_part){
  //   btnScrollToTop.style.position = 'relative';
  // }
  else { 
    btnScrollToTop.style.opacity = "0";
    // btnScrollToTop.style.transition = "1s opacity";
    btnScrollToTop.style.display = 'none';
  }
  // btnScrollToTop.style.display = window.scrollY > 40 ? 'block' : 'none';
});





//.................footer..................
