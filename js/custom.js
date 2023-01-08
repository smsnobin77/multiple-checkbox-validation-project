$(document).ready(function() {
    $("input[name$='answers']").click(function() {
        var test = $(this).val();

        setTimeout($("div.desc").hide(), 99999999);
        setTimeout(function(){ $("#Answers" + test).show()}, 7500);
    });

    $("input[name$='answers1']").click(function() {
        var test = $(this).val();

        setTimeout($("div.desc").hide(), 99999999);
        setTimeout(function(){ $("#Answers1" + test).show()}, 7500);
    });

    $("input[name$='answersQ7']").click(function() {
        var test = $(this).val();

        setTimeout($("div.desc").hide(), 99999999);
        setTimeout(function(){ $("#AnswersQ7" + test).show()}, 7500);
    });

    $("input[name$='answersQ8']").click(function() {
        var test = $(this).val();

        setTimeout($("div.desc").hide(), 99999999);
        setTimeout(function(){ $("#AnswersQ8" + test).show()}, 7500);
    });

    $("input[name$='answersQ9']").click(function() {
        var test = $(this).val();

        setTimeout($("div.desc").hide(), 99999999);
        setTimeout(function(){ $("#AnswersQ9" + test).show()}, 7500);
    });

    $("input[name$='answersQ10']").click(function() {
        var test = $(this).val();

        setTimeout($("div.desc").hide(), 99999999);
        setTimeout(function(){ $("#AnswersQ10" + test).show()}, 7500);
    });

    $("input[name$='answersQ11']").click(function() {
        var test = $(this).val();

        setTimeout($("div.desc").hide(), 99999999);
        setTimeout(function(){ $("#AnswersQ11" + test).show()}, 7500);
    });

    $("input[name$='answersQ13']").click(function() {
        var test = $(this).val();

        setTimeout($("div.desc").hide(), 99999999);
        setTimeout(function(){ $("#AnswersQ13" + test).show()}, 7500);
    });

    $("input[name$='answersQ18']").click(function() {
        var test = $(this).val();

        setTimeout($("div.desc").hide(), 99999999);
        setTimeout(function(){ $("#AnswersQ18" + test).show()}, 7500);
    });

    $("input[name$='answersQ19']").click(function() {
        var test = $(this).val();

        setTimeout($("div.desc").hide(), 99999999);
        setTimeout(function(){ $("#AnswersQ19" + test).show()}, 7500);
    });

    $("input[name$='answersQ20']").click(function() {
        var test = $(this).val();

        setTimeout($("div.desc").hide(), 99999999);
        setTimeout(function(){ $("#AnswersQ20" + test).show()}, 7500);
    });

    $("input[name$='answersQ22']").click(function() {
        var test = $(this).val();

        setTimeout($("div.desc").hide(), 99999999);
        setTimeout(function(){ $("#AnswersQ22" + test).show()}, 7500);
    });

    $("input[name$='answersQ23']").click(function() {
        var test = $(this).val();

        setTimeout($("div.desc").hide(), 99999999);
        setTimeout(function(){ $("#AnswersQ23" + test).show()}, 7500);
    });

    $("input[name$='answersQ26']").click(function() {
        var test = $(this).val();

        setTimeout($("div.desc").hide(), 99999999);
        setTimeout(function(){ $("#AnswersQ26" + test).show()}, 7500);
    });

    $("input[name$='answersQ27']").click(function() {
        var test = $(this).val();

        setTimeout($("div.desc").hide(), 99999999);
        setTimeout(function(){ $("#AnswersQ27" + test).show()}, 7500);
    });

    $("input[name$='answersQ28']").click(function() {
        var test = $(this).val();

        setTimeout($("div.desc").hide(), 99999999);
        setTimeout(function(){ $("#AnswersQ28" + test).show()}, 7500);
    });

    $("input[name$='answersQ29']").click(function() {
        var test = $(this).val();

        setTimeout($("div.desc").hide(), 99999999);
        setTimeout(function(){ $("#AnswersQ29" + test).show()}, 7500);
    });

    $("input[name$='answersQ30']").click(function() {
        var test = $(this).val();

        setTimeout($("div.desc").hide(), 99999999);
        setTimeout(function(){ $("#AnswersQ30" + test).show()}, 7500);
    });

    $("input[name$='answersQ34']").click(function() {
        var test = $(this).val();

        setTimeout($("div.desc").hide(), 99999999);
        setTimeout(function(){ $("#AnswersQ34" + test).show()}, 7500);
    });

    $("input[name$='answersQ35']").click(function() {
        var test = $(this).val();

        setTimeout($("div.desc").hide(), 99999999);
        setTimeout(function(){ $("#AnswersQ35" + test).show()}, 7500);
    });

    $('.question37').change(function() {
      var values = [];

      {
        $('.question37 :checked').each(function() {
          //if(values.indexOf($(this).val()) === -1){
          values.push($(this).val());
          // }
        });
      }
      console.log(values);
      if (values.includes('2') && values.includes('4') && values.includes('5') && values.length == 3) {
          setTimeout($("div.desc").hide(), 99999999);
            setTimeout(function(){ $("#AnswersQ372").show()}, 7500);
            console.log("true");
        }else{
            setTimeout($("div.desc").hide(), 99999999);
            setTimeout(function(){ $("#AnswersQ371").show()}, 7500);
            console.log("false");
        }

    });

    $("input[name$='answersQ39']").click(function() {
        var test = $(this).val();

        setTimeout($("div.desc").hide(), 99999999);
        setTimeout(function(){ $("#AnswersQ39" + test).show()}, 7500);
    });

    $("input[name$='answersQ40']").click(function() {
        var test = $(this).val();

        setTimeout($("div.desc").hide(), 99999999);
        setTimeout(function(){ $("#AnswersQ40" + test).show()}, 7500);
    });

    $("input[name$='answersQ41']").click(function() {
        var test = $(this).val();

        setTimeout($("div.desc").hide(), 99999999);
        setTimeout(function(){ $("#AnswersQ41" + test).show()}, 7500);
    });

    $("input[name$='answersQ43']").click(function() {
        var test = $(this).val();

        setTimeout($("div.desc").hide(), 99999999);
        setTimeout(function(){ $("#AnswersQ43" + test).show()}, 7500);
    });

    $("input[name$='answersQ46']").click(function() {
        var test = $(this).val();

        setTimeout($("div.desc").hide(), 99999999);
        setTimeout(function(){ $("#AnswersQ46" + test).show()}, 7500);
    });

    $("input[name$='answersQ47']").click(function() {
        var test = $(this).val();

        setTimeout($("div.desc").hide(), 99999999);
        setTimeout(function(){ $("#AnswersQ47" + test).show()}, 7500);
    });

    $("input[name$='answersQ48']").click(function() {
        var test = $(this).val();

        setTimeout($("div.desc").hide(), 99999999);
        setTimeout(function(){ $("#AnswersQ48" + test).show()}, 7500);
    });

    $("input[name$='answersQ49']").click(function() {
        var test = $(this).val();

        setTimeout($("div.desc").hide(), 99999999);
        setTimeout(function(){ $("#AnswersQ49" + test).show()}, 7500);
    });

    $('.question53').change(function() {
      var values1 = [];

      {
        $('.question53 :checked').each(function() {
          //if(values.indexOf($(this).val()) === -1){
          values1.push($(this).val());
          // }
        });
      }
      console.log(values1);
      if (values1.includes('1') && values1.includes('2') && values1.includes('3') && values1.includes('5') && values1.length == 4) {
          setTimeout($("div.desc").hide(), 99999999);
            setTimeout(function(){ $("#AnswersQ531").show()}, 7500);
            console.log("true");
        }else{
            setTimeout($("div.desc").hide(), 99999999);
            setTimeout(function(){ $("#AnswersQ534").show()}, 7500);
            console.log("false");
        }

    });

    $("input[name$='answersQ60']").click(function() {
        var test = $(this).val();

        setTimeout($("div.desc").hide(), 99999999);
        setTimeout(function(){ $("#AnswersQ60" + test).show()}, 7500);
    });



});

