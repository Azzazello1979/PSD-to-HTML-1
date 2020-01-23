$(document).ready(function(){
    
    // CHECK OUT CURRENT VERSION AND DOCUMENTATION //

    /////////////////////////////////////
    // UNWRAPPING A JQUERY OBJ = ARRAY //
    //   switching bw jQuery and vjs   //
    /////////////////////////////////////

    // All jQuery methods return a jQuery object, that is actuall an array.
    
       // console.log( $("#social-nav") )
       // $("#social-nav") is a jQuery obj/arr, so you can chain any jQuery method to it
       //
       // to unwrap it from jQuery, and to use native Vanilla JS features on it, 
       // simply call [0] on it, the 1st element in the jQuery obj/arr is 
       // the native JS version of the element, not a jQuery obj/arr any more
       //
       // check:
       //
       // console.log( $("#social-nav")[0] )
       //
       // after you have unwrapped from jQuery, you cannot use any jQuery method on it

       // HOWEVER

       // $("#comments[0]") ... is the 1st comment if comments returns jQuery array!
       //
       // same as
       //
       // $("#comments").eq(0) ... is the 1st comment if comments returns jQuery array!
       //
       // however
       //
       // $("#comments")[0] ... exits the jQuery object, goes to VJS mode



    // $("h3").css("border", "1px solid blue"); // for applying one css prop.
    // $("#lead-banner").css({ border: "1px solid green", width: "100px" }); // for applying multiple css props. in one go

    ////////////////////////////////////
    // FILTERS ... refining selection //
    ////////////////////////////////////

    // :eq() equals ... pick one from the array
    // $("#contact-methods li:eq(2)").css("border", "2px dotted red");

    // firs & last occurance
    // $("header nav li:first").css({ border: "2px solid red" });
    // $("header nav li:last").css({ border: "2px solid red" });

    // first-child & last-child
    // $("#contact ul:first-child").css({ border: "2px solid red" });
    // $("#contact ul:last-child").css({ border: "2px solid red" });

    //$("#contact img").css({ border: "2px solid red" });

    // even & odd
    // $("header nav li:even").css({ border: "2px solid blue" });
    // $("header nav li:odd").css({ border: "2px solid pink" });

    // not
    // $("section:not('#clients')").css({ border: "2px dotted orange" });

    // less than (lt)
    // $("#social-nav li:lt(3)").css({ border: "2px dotted red" });

    // greater than (gt)
    // $("#social-nav li:gt(2)").css({ border: "2px dotted red" });

    // ATTRIBUTE FILTERS

    // go after every div that has a class..
    // $("div[class]").css({ border: "2px dotted green" });

    // go after every image that has alt..
    // $("img[alt]").css({ border: "2px dotted red" });

    // ATTRIBUTE FILTERS WITH SPEC. VALUES

    // go after every list-item that has a class "facebook"
    // $("li[class=facebook]").css({ border: "2px dotted green" });

    // go after every image that has alt "quote"
    //$("img[alt=quote]").css({ border: "2px dotted red" });




    ////////////////////
    // DOM TRAVERSING //
    ////////////////////

    // next(), find the next element on the same level (not child, not parent) ... DOWN ARROW
    // $("#contact-methods").next().css("border", "2px dotted red");

    // prev(), find the previous element on the same level ... UP ARROW
    // $("#clients blockquote").prev().css("border", "2px dotted red");

    // parent(), find the element one level up the tree ... UP ONE FOLDER
    // $("#contact-methods").parent().css("border", "2px dotted red");

    // parents(), selects all the parents up the way ...

    // children(), find the element one level down the tree ... ENTER FOLDER
    // $("#contact-methods li:eq(2)").children().css("color", "green");

    // more specifically, use .eq(1) - index number one from array
    // $("#contact-methods li:eq(2)").children().eq(1).css("color", "green");

    // find() ... finds specified element by tag name / class name / id name
    // $("#contact").find("span").css("border", "1px dotted orange");
    // $("#contact").find(".twitter").css("border", "1px dotted orange");

    // closest() find closest PARENT up the tree, by whatever class or id you specify
    // $("#social-nav").closest(".wrapper").css("border", "3px solid red");




    //////////////
    // CHAINING //
    //////////////
    
    /* $("#contact-methods").css({ border: "2px solid red" })
    .next().css({ border: "2px solid green" })
    .closest("section").css({ border: "2px solid blue" }); */
    



    ///////////////////////////////
    // ADDING - REMOVING content //
    ///////////////////////////////

    // append() and prepend() ... same level
    // let tweet1 = "<div>This is an appended tweet</div>"
    // let tweet2 = "<div>This is a prepended tweet</div>"

    // $("#tweets div").append(tweet1);
    // $("#tweets div").prepend(tweet2);

    // before() and after() ... same level
    // $("#tweets div p").before(tweet2);
    // $("#tweets div p").after(tweet1);

    // html() HTML format - replace the whole content - lets you work with html tags as well(like innerHTML in VJS)
    // $("#tweets div").html(tweet1);

    // text() plain text format - replace only the text - no html tags allowed(like innerText in VJS)
    // $("#tweets h2").text("I changed the heading!");




    //////////////////////////////////////
    // WRAPPING and UNWRAPPING elements //
    //////////////////////////////////////

    // wrap() & unwrap() - wraps nodes individually in a given tag, just put the opening tag
    // for unwrap(), no argument needed
    // $("section").wrap("<div>");
    // $("section").unwrap();
    // $("#tweets div p").unwrap();

    // wrapAll() - same as wrap() except does not wrap elements individually, wraps them as a whole
    // $("section").wrapAll("<div>");

    /* let wrapper = "<div class='wrapper'>";
    let button = $(".button");
    let wrapped = true;

    button[0].addEventListener('click', function(){
        if(wrapped){
            $("section").unwrap();
            wrapped = false;
            button.text("Wrap!");
        }else{
            $("section").wrapAll(wrapper);
            wrapped = true;
            button.text("Unwrap!");
        }
    }) */




    //////////////////////
    // REMOVING CONTENT //
    //////////////////////

    // empty() -- empties the innerHTML, but leaves the HTML in the DOM
    // remove() -- removes node from the DOM

    //$(".button").empty();
    //$(".button").remove();




    /////////////////////////
    // CHANGING ATTRIBUTES //
    /////////////////////////

    // removeAttr() - removes an attribute completely
    // attr() - reads or sets/changes attribute

    //$("#contact img").removeAttr("alt");
    //$("#contact img").attr("alt", "this is the alt message");
    //console.log( $("#contact img").attr("alt") );




    /////////////////////
    // CONTROLLING CSS //
    /////////////////////

    // css() read or set/update css property
    // console.log( $("#social-nav").css("position") );
    // $("#social-nav").css("top", "-200px");

    /* $("#social-nav").css({
        top: "-400px",
        left: "150px",
        opacity: "0.5",
        'border-top': "4px solid red"
    }) */

    // set one property, then read it
    /* $("#social-nav").children().eq(0).css("color", "red")
    console.log( $("#social-nav").children().eq(0).css("color") ) */




    //////////////////////////
    // MANIPULATING CLASSES //
    //////////////////////////

    // removeClass() - removes a class from the matchedelement(s)
    // $("header .wrapper").removeClass("wrapper");

    // addClass() - adds a class to the matched element(s)
    // select header element, go after its 1st child div (that has no class because we just deleted it above) 
    // $("header > div").addClass("wrapper");

    // toggleClass() - toggles the class on and off on the matched element(s)
    /* $("#lead-banner a").on("click", function(){
        console.log("hiiii");
        $("#points-of-sale").toggle().css("border", "5px solid blue")
        return false; // cancel default behavior of anchor that would navigate away
    }) */

   /*  $("#lead-banner a").on("click", function(){
        console.log("hiiii");
        $("#points-of-sale").toggleClass("open")
        return false; // cancel default behavior of anchor that would navigate away
    }) */




    ///////////////////
    // EVENT BINDING //
    /////////////////////////////////////////////////////
    // React to events consistently in all browsers... //
    /////////////////////////////////////////////////////

    // on() - binds an event to matched element(s)
    // off() - unbinds event from matched elements()
    
    /* let myLis = $("#points-of-sale li")
    myLis.on("click", function(){
        //console.log(this) // this is the actually selected element, you cant use "this" if you use arrow function above because then "this" will refer to the window object.
        $(this).find("p").css({ color: "red" })
        // now unbind event so another click cannot change color of another <li> <p>
        myLis.off("click")
    }) */

    // toggle Class
    /* let myLis = $("#points-of-sale li")
    myLis.on("click", function(){
        //console.log( $(this).children().eq(2)[0] );
        $(this).children().eq(2).toggleClass("some");
        
        
    }) */




    ///////////////////
    // EVENT HELPERS //
    ///////////////////

    // shorthand for on() and off()
    /* $("#contact img").dblclick(function(){
        alert('You dbl clicked the map!')
    }) */

    // same as...

    /* $("#contact img").on('dblclick', function(){
        alert('You dbl clicked the map!')
    }) */




    /////////////////////
    // DOCUMENT READY ///
    /////////////////////
    // waits for the html tags to be fully loaded, but not the images!
    // DOM

    /* $(document).on("ready", function(){
        // ....
    })

    $(document).ready(function(){
        // ....
    })

    $(function(){
        // ....
    }) */

    /////////////////
    // WINDOW LOAD //
    /////////////////
    // waits for the html tags to be fully loaded as well as waits for images to be fully loaded
    // DOM + images

    /* $(window).on("load", function(){
        // ....
    })

    $(window).load(function(){
        // ....
    }) */




    ////////////////////////////////
    // THE EVENT OBJECT IN JQUERY //
    ////////////////////////////////
    // consistent across all browsers ...

    // **** CHECK OUT ANYTHING YOU CLICK ON **** 
    // select all elements "*"
    /* $("*").on("click", function(event){
        console.log('Event obj is: ' , event)
        event.stopPropagation()
    }) */




    ///////////////////////
    // JQUERY ANIMATIONS //
    ///////////////////////

    // css() - changes the style but no animation
    /* $("section > h2").on("click", function(){
        $(this).css({ width: "500px", height: "100px" })
    }) */

    // animate() - changes the style with animation
    // CAN ANIMATE ANYTHIG THAT HAS NUMERICAL VALUES, IN CSS
    // second param. is speed, in milliseconds, default is 400
    // third param. is "swing" or "linear" - default is swing, its nicer
    // fourth param. fire function after anim. complete, callback func.
    /* const greeting = () => {
        alert("heeey")
    } */

    // this will call greeting function as callback, when anim is completed
    /* $("section > h2").on("click", function(){
        $(this).animate({ width: "500px", height: "100px" }, 1000, "swing", greeting )
    }) */

    // this will call greeting function right away ....
    /* $("section > h2").on("click", function(){
        $(this).animate({ width: "500px", height: "100px" }, 1000, "swing", greeting() )
    }) */


    /////////////////////
    // FADING ELEMENTS //
    /////////////////////

    // fadeOut(time) ... fades out and then is removed from the DOM
    // fadeIn(time) ... fades in
    /* $("section > h2").on("click", function(){
        $(this).fadeOut(1000).fadeIn(500)
    }) */

    // fadeTo(time, opacity)
    /* $("section > h2").on("click", function(){
        $(this).fadeTo(500, 0.1).fadeTo(500, 1)
    }) */



    ////////////////////////
    // HIDE, SHOW, TOGGLE //
    ////////////////////////

    // hide(time) - changes elements display:none over time, element slides out of view 
    // show(time) - opposite
    /* $("section > h2").on("click", function(){
        $(this).hide(300).show(300)
    }) */

    // toggle(time)
    /* $("img[alt=map]").on("click", function(){
        $("section > h2").toggle(300)
    })  */




    //////////////////////
    // SLIDING ELEMENTS //
    //////////////////////

    // slideUp() and slideDown() change the height of the target, they dont actually slide
    $(".slide-button-up").on("click", function(){
        $("#lead-banner").slideUp(1000, "swing", function(){
            alert("its up")
        })
    })
    $(".slide-button-down").on("click", function(){
        $("#lead-banner").slideDown(1000, "linear", function(){
            alert("its down")
        })
    })
    $(".slide-button-toggle").on("click", function(){
        $("#lead-banner").slideToggle(1000, "swing", function(){
            alert('animation done')
        })
    })




    /////////////////
    // QUOTE FADER //
    /////////////////

    /* const quotes = [
        'Roses are red',
        'Violets are blue',
        'I like to make money too',
        'I shot the sherrif',
        'Water is clear'
    ];

    let quotesI = 0;

    function showQuotes(){
        if(quotesI !== quotes.length){
            $("#clients div").html(`<p>${quotes[quotesI]}</p>`).hide()
            .show(2000).hide(2000, function(){
                quotesI ++;
                showQuotes();
            });
        } else {
            quotesI = 0;
            showQuotes();
        }   
    }

    showQuotes(); */

    // slideToggle() click on images, p will disappear/appear
    let items = $("#points-of-sale li");
    items.click( function(){
        $(this).find("p").slideToggle(500);
    } )
    



    //////////////////////////////////////////
    // USING A PLUGIN - responsiveslides.js //
    //////////////////////////////////////////
    // http://responsiveslides.com
    
    $(".rslides").responsiveSlides({
        nav:true,
        pause:true,
    })







})