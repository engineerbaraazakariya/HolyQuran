(function () {
  "use strict";

  const surah = {
    0.39093: "سورة الفاتحة",
    0.49144: "سورة البقرة",
    7.55371: "سورة آل عمران",
    11.6518: "سورة النساء",
    16.0354: "سورة المائدة",
    19.2906: "سورة الأنعام",
    22.8447: "سورة الأعراف",
    26.8749: "سورة الأنفال",
    28.3758: "سورة التوبة",
    31.3515: "سورة يونس",
    33.4916: "سورة هود",
    35.7268: "سورة يوسف",
    37.8125: "سورة الرعد",
    38.8512: "سورة إبراهيم",
    39.8899: "سورة الحجر",
    40.8062: "سورة النحل",
    43.0278: "سورة الإسراء",
    44.9367: "سورة الكهف",
    46.8183: "سورة مريم",
    48.0203: "سورة طه",
    49.6844: "سورة الأنبياء",
    51.1853: "سورة الحج",
    "52.7000": "سورة المؤمنون",
    54.0513: "سورة النور",
    55.6338: "سورة الفرقان",
    56.7678: "سورة الشعراء",
    58.6086: "سورة النمل",
    60.0144: "سورة القصص",
    61.7194: "سورة العنكبوت",
    62.9484: "سورة الروم",
    63.9871: "سورة لقمان",
    64.6586: "سورة السجدة",
    "65.1670": "سورة الأحزاب",
    66.7632: "سورة سبأ",
    67.8154: "سورة فاطر",
    68.7725: "سورة يس",
    69.7159: "سورة الصافات",
    71.0129: "سورة ص",
    71.9974: "سورة الزمر",
    73.4031: "سورة غافر",
    74.8904: "سورة فصلت",
    75.8611: "سورة الشورى",
    76.8998: "سورة الزخرف",
    77.9929: "سورة الدخان",
    78.5013: "سورة الجاثية",
    79.1319: "سورة الأحقاف",
    79.9258: "سورة محمد",
    80.6382: "سورة الفتح",
    81.3776: "سورة الحجرات",
    81.8452: "سورة ق",
    82.3673: "سورة الذاريات",
    82.9029: "سورة الطور",
    83.3705: "سورة النجم",
    83.8924: "سورة القمر",
    84.4008: "سورة الرحمن",
    84.9771: "سورة الواقعة",
    85.6078: "سورة الحديد",
    86.3474: "سورة المجادلة",
    86.9372: "سورة الحشر",
    87.5136: "سورة الممتحنة",
    87.9677: "سورة الصف",
    88.2992: "سورة الجمعة",
    88.5628: "سورة المنافقون",
    "88.8400": "سورة التغابن",
    89.1988: "سورة الطلاق",
    89.5848: "سورة التحريم",
    89.9435: "سورة الملك",
    90.3976: "سورة القلم",
    90.8651: "سورة الحاقة",
    91.2784: "سورة المعارج",
    91.6507: "سورة نوح",
    91.9959: "سورة الجن",
    92.3819: "سورة المزمل",
    92.6862: "سورة المدثر",
    93.0859: "سورة القيامة",
    93.3766: "سورة الإنسان",
    93.7491: "سورة المرسلات",
    94.0943: "سورة النبأ",
    94.4123: "سورة النازعات",
    94.7439: "سورة عبس",
    95.0074: "سورة التكوير",
    95.2302: "سورة الانفطار",
    95.3987: "سورة المطففين",
    95.6896: "سورة الانشقاق",
    95.8987: "سورة البروج",
    96.1079: "سورة الطارق",
    96.2628: "سورة الأعلى",
    96.4312: "سورة الغاشية",
    96.6269: "سورة الفجر",
    96.8768: "سورة البلد",
    97.0452: "سورة الشمس",
    97.1866: "سورة الليل",
    97.3549: "سورة الضحى",
    97.4825: "سورة الشرح",
    "97.5830": "سورة التين",
    97.6971: "سورة العلق",
    97.8655: "سورة القدر",
    97.9659: "سورة البينة",
    "98.1480": "سورة الزلزلة",
    "98.2620": "سورة العاديات",
    "98.3760": "سورة القارعة",
    "98.4900": "سورة التكاثر",
    98.5906: "سورة العصر",
    98.6773: "سورة الهمزة",
    98.7914: "سورة الفيل",
    98.8918: "سورة قريش",
    98.9786: "سورة الماعون",
    99.0791: "سورة الكوثر",
    99.1524: "سورة الكافرون",
    99.2527: "سورة النصر",
    99.3396: "سورة المسد",
    99.4401: "سورة الإخلاص",
    99.5269: "سورة الفلق",
    99.6138: "سورة الناس",
  };

  function getSurahByIndex(currentScrollPos) {
    const surahIndexes = Object.keys(surah);
    let nextSurahStartPos = -1;
    const surahSurahPos = surahIndexes.find((surahElement, currentIndex) => {
      // console.log(index, surahElement, currentIndex);
      nextSurahStartPos = Number(surahIndexes[currentIndex + 1]);
      return (
        Number(surahElement) <= currentScrollPos &&
        Number(surahIndexes[currentIndex + 1]) > currentScrollPos
      );
    });
    const nextPosPercentage = getNextPosPercentage(
      surahSurahPos,
      nextSurahStartPos,
      currentScrollPos
    );
    return { name: surah[surahSurahPos], percentage: nextPosPercentage };
  }

  function getNextPosPercentage(
    currentSurahStartPos,
    nextSurahStartPos,
    currentScrollPos
  ) {
    currentSurahStartPos = Number(currentSurahStartPos);
    nextSurahStartPos = Number(nextSurahStartPos);
    currentScrollPos = Number(currentScrollPos);
    return (
      ((currentScrollPos - currentSurahStartPos) /
        (nextSurahStartPos - currentSurahStartPos)) *
      100
    );
  }

  document.onscroll = function () {
    const currentScrollPos = getVerticalScrollPercentage(document.body);
    const surahName = getSurahByIndex(currentScrollPos).name;
    const surahPercentage = getSurahByIndex(currentScrollPos).percentage;

    // Commented lines are for testing purposes we have two commented blocks for testing in this file
    // console.log(getSurahByIndex(currentScrollPos));
    // var sbHeight = window.innerHeight * (window.innerHeight / document.body.offsetHeight);
    // var sbTop = window.scrollY * (window.innerHeight / document.body.offsetHeight);
    // document.getElementById("percentTag").innerHTML = '\nscrollHeight: '+document.body.scrollHeight + '\npos: '+  currentScrollPos;
    // document.getElementById("percentTag").innerHTML = currentScrollPos;
    // document.getElementById("percentTag").onclick =   navigator.clipboard.writeText(currentScrollPos.toString().substring(0, 6));
    // document.getElementById("percentTag").onclick =   navigator.clipboard.writeText(currentScrollPos.toString().substring(0, 6));
    document.title = surahName
      ? surahName +
        " " +
        surahPercentage.toFixed(0) +
        "% - " +
        Math.round(currentScrollPos) +
        "%"
      : "القرآن الكريم";
  };

  function getVerticalScrollPercentage(elm) {
    var p = elm.parentNode;
    return (
      ((elm.scrollTop || p.scrollTop) / (p.scrollHeight - p.clientHeight)) * 100
    );
  }

  $(document).ready(function () {
    $("#content").css({
      padding: "0",
      margin: "0",
      width: "100%",
    });
    $(".prose").css({
      padding: "2%",
      margin: "0",
      width: "95%",
    });
    $("#mw-panel").remove();

    // Commented lines are for testing purposes we have two commented blocks for testing in this file
    // const percentTag = "<div id='percentTag' style='position:fixed;right:0;top:50%;'>Loading...</div>";
    // $("body").append(percentTag);

    // $('.prose a').click((ele)=>{
    //     setTimeout((ele)=>{
    //     const surahName = ele.target.innerHTML;
    //     const pos = $('#percentTag').text();
    //     console.log('{\''+pos.toString().substring(0,7)+'\':'+surahName+'}');
    //     },500,ele);
    // });
    // window.indexxer = 0;
    // setInterval(() => {
    //     $('.prose a')[window.indexxer].click();
    //     window.indexxer++;
    // }, 750);
  });
})();
