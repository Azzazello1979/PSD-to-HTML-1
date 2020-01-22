$(document).ready(function(){
    
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
    $("#social-nav").css({
        top: "-400px",
        left: "150px",
        opacity: "0.5",
        'border-top': "4px solid red"
    })




})