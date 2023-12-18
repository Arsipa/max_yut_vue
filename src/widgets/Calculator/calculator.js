
//создаю объект входных данных
var data = new InputData();
//создаю объект входных данных


//vзаполняю объект входных данныхv

//vсоздаю массив марокv
data.marks = function () {
  var prepareArr = [
    'Аристо Эко',         //0
    'Аристо стандарт «С»',//1
    'Аристо стандарт «Н»',//2
    'АристоFLAT'          //3
  ];
  return data.createSimpeObjArr(prepareArr, Mark);
}();
//^создаю массив марок^

//vсоздаю массив цветовv
data.colors = function () {
  var prepareArr = [
    'Хром',             //0
    'Золото',           //1
    'Шампань матовая',  //2
    'Бронза блестящая', //3
    'Шампань блестящая',//4
    'Венге',            //5
    'Венге темный',     //6
    'Вишня',            //7
    'Дуб дымчатый',     //8
    'Орех итальянский', //9
    'Орех французский', //10
    'Дуб белый',        //11
    'Дуб серый',        //12
    'Дуб кантри',       //13
    'Дуб неаполь',      //14
    'Орех благородный', //15
    'Белый глянец',     //16
  ];
  return data.createSimpeObjArr(prepareArr, Color);
}();
//^создаю массив цветов^

// vсоздаю массив материаловv
data.materials = function () {
  var prepareArr = [
    'Зеркало серебро',      //0
    'ЛДСП',                 //1
    'Зеркало бронза',       //2
    'Матовое стекло',       //3
    'Плёнка ORACAL',        //4
    'Зеркало сатинат',      //5
    'Пескоструй-ный рисунок',//6
    'Фотопечать'            //7
  ];
  return data.createSimpeObjArr(prepareArr, Material);
}();
// ^создаю массив материалов^

//v добавляю маркам массивы цветовv
var colorMarks = function () {
  prepareArr = [
    [0, 1, 2],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 6]
  ];
  return data.setColorMarks(prepareArr);
}();
//^добавляю маркам массивы цветов^

//vсоздаю массив стандартных размеров дверных проемовv
var createStandartSizes = function () {
  var prepareArr = [
    [1, 450, 870],
    [2, 900, 1780],
    [3, 1350, 2660],
    [4, 1800, 3550],
    [5, 2250, 4400],
    [6, 2700, 5300]
  ];
  return data.createStandartSizes(300, 3500, 2720, prepareArr, StandartSizes)
}();
//^создаю массив стандартных размеров дверных проемов^

//vсоздаю массив стандартных ценv
data.standartPrices = function () {
  var prepareArr = [
    [0, 0, 10900], [1, 0, 11700], [2, 0, 11700], [3, 0, 12700],
    [0, 1, 10900], [1, 1, 11700], [2, 1, 11700], [3, 1, 12700],
    [0, 2, 13500], [1, 2, 14300], [2, 2, 14300], [3, 2, 15300],
    [0, 3, 13800], [1, 3, 14600], [2, 3, 14600], [3, 3, 15600],
    [0, 4, 13800], [1, 4, 14600], [2, 4, 14600], [3, 4, 15600],
    [0, 5, 13600], [1, 5, 14400], [2, 5, 14400], [3, 5, 15400],
    [0, 6, 17500], [1, 6, 18300], [2, 6, 18300], [3, 6, 19300],
    [0, 7, 20500], [1, 7, 21300], [2, 7, 20300], [3, 7, 22300]
  ];
  return data.createPriceObjArr(prepareArr, StandartPrice);
}();
//^создаю массив стандартных цен^

//vсоздаю массив нестандартных ценv
data.originalPrices = function () {
  var prepareArr = [
    [0, 0, 14170], [1, 0, 15210], [2, 0, 15210], [3, 0, 16510],
    [0, 1, 14170], [1, 1, 15210], [2, 1, 15210], [3, 1, 16510],
    [0, 2, 17550], [1, 2, 18590], [2, 2, 18590], [3, 2, 19890],
    [0, 3, 17940], [1, 3, 18980], [2, 3, 18980], [3, 3, 20280],
    [0, 4, 17940], [1, 4, 18980], [2, 4, 18980], [3, 4, 20280],
    [0, 5, 17680], [1, 5, 18720], [2, 5, 18720], [3, 5, 20020],
    [0, 6, 22750], [1, 6, 23790], [2, 6, 23790], [3, 6, 25090],
    [0, 7, 26650], [1, 7, 27690], [2, 7, 27690], [3, 7, 28990]
  ];
  return data.createPriceObjArr(prepareArr, OriginalPrice);
}();
//^создаю массив нестандартных цен^
data.calcElements = function () {
  var prepareArr = [
    [0, 'doorwayHeight'],
    [1, 'doorwayWidth'],
    [2, 'profileMark'],
    [3, 'profileColor'],
    [4, 'doorsNumber'],
    /*[5, 'deliveryInstallation'],
    [6, 'delivery'],
    [7, 'takeIt'],
    [8, 'calcButton'],*/
  ];
  return data.createCalcElementArr(prepareArr, calcElement);
}();

data.delivery = function () {
  var prepareArr = [
    [0, 'Заберу сам', 0, 0, 0],
    [1, 'Доставка', 1700, 0, 0],
    [2, 'Дос/монтаж', 1700 + 1700, 500, 2]
  ];
  return data.createDeliveryArr(prepareArr, Delivery);
}();
//^заполняю объект входных данных^

var validator = new Validator();
var shkaf = new ShkafKupe();
$(document).ready(function () {

  $('#myDropdown').ddslick({
    selectText: "Выберите цвет профиля",
    width: 190,
    imagePosition: "left",
    onSelected: function (selectedData) {

    }
  });



  //console.log((80+113*doorsNumber)+'px');
  data.setCalcElements(); //заполняю свойство element у объектов массива calcElementArr

  drawMarkOptions();

  shkaf.delivery = data.getDelivery(0);

  $('#doorwayHeight').keyup(function () {
    var result = validator.checkDoorwayHeight(this.value, data.minHeight, data.maxHeight);
    workAfterValidation(result, 'doorwayHeight');
    (result) ? shkaf.doorwayHeight = data.getCurrCalcElement('doorwayHeight').value * 1 : shkaf.doorwayHeight = null; //как обратиться к свойству объекта (без eval), зная только название свойства (строку)?
  });

  $('#doorwayWidth').keyup(function () {
    var result = validator.checkDoorwayWidth(this.value, data.getMinWidth(), data.getMaxWidth());
    workAfterValidation(result, 'doorwayWidth', this);
    (result) ? shkaf.doorwayWidth = data.getCurrCalcElement('doorwayWidth').value * 1 : shkaf.doorwayWidth = null;
    drawDoorsNumberOptions();

    var result = validator.checkDoorsNumber($('#doorsNumber')[0].value);
    workAfterValidation(result, 'doorsNumber', this);
  });

  $('#profileMark').on('change', function (event) {
    var result = validator.checkProfileMark(this.value);
    workAfterValidation(result, 'profileMark', this);
    (result) ? shkaf.profileMark = data.getCurrCalcElement('profileMark').value * 1 : shkaf.profileMark = null;
    drawColorOptions();

    var result = validator.checkProfileColor($('#profileColor')[0].value);
    workAfterValidation(result, 'profileColor', this);
  });

  $('#profileColor').on('change', function (event) {
    var result = validator.checkProfileColor(this.value);
    workAfterValidation(result, 'profileColor', this);
    (result) ? shkaf.profileColor = data.getCurrCalcElement('profileColor').value * 1 : shkaf.profileColor = null;
  });

  $('#doorsNumber').on('change', function (event) {
    var result = validator.checkDoorsNumber(this.value);
    workAfterValidation(result, 'doorsNumber', this);
    (result) ? shkaf.doorsNumber = data.getCurrCalcElement('doorsNumber').value * 1 : shkaf.doorsNumber = null;
  });

  $('input[name=delivery]').on('change', function (event) {
    shkaf.delivery = data.getDelivery(this.value);
  });

  $('#calcButton').on('click', function () {
    shkaf.setOriginal(data.getDoorsNumber(shkaf.doorwayWidth), data.standartMaxHeight);
    drawDoorsAndMaterialRadio(shkaf.doorsNumber, data.materials);
    shkaf.doorsMaterial = getMaterialArr();
    shkaf.setPrice(data.standartPrices, data.originalPrices);



    //$('#ksk-cost').first().remove();
    $('#ksk-cost').empty();
    $('#ksk-cost').append(shkaf.price);

    ym(46704141, 'reachGoal', 'doorCalc');
  });
  /*$('.ksk-door-material input[name="door-one-material"]').change(function(){
      //shkaf.updateMaterialsArr(this.id);
      console.log(this.value);
  });
  $('.ksk-door-material label').on('click', function (event) {
      console.log('клик');
  });*/

  function workAfterValidation(validatorResult, calcElementId) {
    var calcEl = data.getCurrCalcElement(calcElementId);
    var enableElementsArr = [];
    if (validatorResult) {
      enableElementsArr = data.getEnebleElementsArr(calcElementId, validator);
      //включаю валидные элементы + элемент, следующий за последним валидным
      for (var i in enableElementsArr) {
        $('#' + enableElementsArr[i])[0].disabled = false;
      }
      $(calcEl).css('border', '1px solid green');
      if (validator.getValidById('profileMark')) {
        $('div.ksk-section.step-two').children('div.ksk-section-title').removeClass('grey').addClass('blue');
        $('.ksk-section-title-num.two').css('color', '#a1afcf');
      }
    } else {
      setDisableNextCalcElements(calcElementId);
      $(calcEl).css('border', '1px solid red');
      $('div.ksk-section.step-two').children('div.ksk-section-title').removeClass('blue').addClass('grey');
      $('.ksk-section-title-num.two').css('color', '#c7c7c7');
      $('.ksk-doors').hide();
    }
    if (validator.checkValids()) $('#calcButton')[0].disabled = false;

    //ставлю disable всем элементам, идущим за текущим
    function setDisableNextCalcElements(elementId) {
      currElementNumber = data.getCurrCalcElementNumber(elementId);
      for (var i in data.calcElements) {
        if (data.calcElements[i].number > currElementNumber)
          document.getElementById(data.calcElements[i].id).disabled = true;
      }
      return true;
    }
  }
  function drawMarkOptions() {
    /*vзаполняю select марками профиляv*/
    for (var i in data.marks) {
      $('<option value = "' + data.marks[i].id + '">' + data.marks[i].name + '</option>').appendTo('#profileMark');
    }
    /*^заполняю select марками профиля^*/
  }
  function drawDoorsNumberOptions() {
    if (shkaf.doorwayWidth !== null) {
      doorsNumber = data.getDoorsNumber(shkaf.doorwayWidth);
      $('#doorsNumber').children('option').remove();
      $('<option value = "null">Выберите количество дверей</option>').appendTo('#doorsNumber');
      for (var i = 1; i <= doorsNumber + 1; i++) {
        if (Math.abs(doorsNumber - i) < 2) {
          $('<option value = "' + i + '">' + i + '</option>').appendTo('#doorsNumber');
        }
      }
    }
  }
  function drawColorOptions() {

    /*vзаполняю select цветами профиляv*/
    var ddData = new Array();
    var profid = $('#profileMark').val();
    var markColors = [];
    if (shkaf.profileMark !== null) {
      markColors = data.getMarkColors(shkaf.profileMark);
      $('#profileColor').children('option').remove();
      $('<option value = "null">Выберите цвет профиля</option>').appendTo('#profileColor');
      for (var i in markColors) {
        $('<option value = "' + markColors[i].id + '">' + markColors[i].name + '</option>').appendTo('#profileColor');
        ddData[i] = {
          text: markColors[i].name,
          value: markColors[i].id,
          selected: false,
          imageSrc: "/assets/uyut/colors/" + "/" + markColors[i].id + '.jpg'
        }

      }

      $('#myDropdown').ddslick('destroy');
      $('#myDropdown').ddslick({
        data: ddData,
        width: 190,
        selectText: "Выберите цвет профиля",
        imagePosition: "left",
        onSelected: function (selectedData) {
          colorid = $(".dd-selected-value").val();
          $("select option[value='" + colorid + "']").attr("selected", "selected");


          $('#profileColor').trigger('change');

        }
      });
    }
    /*^заполняю select цветами профиля^*/
  }
  function drawDoorsAndMaterialRadio(doorsNumber, materialsArr) {
    $('.ksk-doors').children('.ksk-door').remove();
    $('.ksk-arrow-width').empty().append($('<span>' + shkaf.doorwayWidth + '<span>')).css('left', 113 * (doorsNumber) / 2 - 34 + 'px');
    $('.ksk-arrow-height').empty().append($('<span>' + shkaf.doorwayHeight + '</span>'));
    for (var i = 1; i <= doorsNumber; i++) {
      var numberString = '';
      switch (i) {
        case 1: numberString = 'one'; break;
        case 2: numberString = 'two'; break;
        case 3: numberString = 'three'; break;
        case 4: numberString = 'four'; break;
        case 5: numberString = 'five'; break;
        case 6: numberString = 'six'; break;
        case 7: numberString = 'seven'; break;
      }
      var numberStringUpper = numberString.charAt(0).toUpperCase() + numberString.substr(1);
      $('.ksk-doors').append(
        $('<div class="ksk-door ' + numberString + '" id="door' + numberStringUpper + '"></div>')
          .append($('<div class="ksk-door-img"></div>'))
          .append($('<div class="ksk-door-title">Дверь ' + i + '</div>'))
          .append($('<div class="ksk-door-material"></div>'))
      );
      var materialName = '';
      for (var mi in materialsArr) {
        materialName = getMaterialName(materialsArr[mi].name);
        materialLabelClass = '';
        checked = '';
        if (mi == 0) checked = 'checked';
        if (materialName.indexOf('<br/>') > -1) materialLabelClass = 'two-rows';
        $('#door' + numberStringUpper).children('.ksk-door-material').append(
          $('<div></div>')
            .append($('<input type="radio" id="m' + i + materialsArr[mi].id + '" name="door-' + numberString + '-material" value="' + i + materialsArr[mi].id + '" ' + checked + '/>'))
            .append('<label for="m' + i + materialsArr[mi].id + '" class="' + materialLabelClass + '">' + materialName + '</label>').on('click', function (event) {
              shkaf.updateMaterialsArr($(this).children('input')[0].id);
              shkaf.setPrice(data.standartPrices, data.originalPrices);
              $('#ksk-cost').empty();
              $('#ksk-cost').append(shkaf.price);
            })
        );
      }
    }
    $('.ksk-arrow-horisontal-line').css('width', (80 + 113 * (doorsNumber - 1)) + 'px');
    $('.ksk-doors').show();
    function getMaterialName(prepareName) {
      if (prepareName.search(/[-]/) > -1)
        return prepareName.replace(/[-]/, '-<br/>');
      if (prepareName.search(/[ ]/))
        return prepareName.replace(/[ ]/, '<br/>');
      return prepareName;
    }
  }
  function getMaterialArr() {
    var checkedInputs = $('.ksk-door-material input[checked]');
    var materialArr = [];
    var materialElId = '';
    var materialId = -1;
    var doorId = -1;
    for (var i = 0; i <= shkaf.doorsNumber - 1; i++) {
      materialElId = checkedInputs[i].id;
      materialId = materialElId.slice(2) * 1;
      doorId = materialElId.slice(1, 2) * 1;
      materialArr[doorId] = materialId;
    }
    return materialArr;
  }
});