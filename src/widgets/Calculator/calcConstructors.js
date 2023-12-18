//↓конструкторы входных данных↓

//↓марка профиля↓
function Mark(id, name){
    this.id = id;
    this.name = name;
    this.markColors = [];
}
//↑марка профиля↑

//↓цвет профиля↓
function Color(id, name){
    this.id = id;
    this.name = name;
}
//↑цвет профиля↑

//↓материал двери↓
function Material(id, name){
    this.id = id;
    this.name = name;
}
//↑материал двери↑

function Delivery(id, name, cost, costForDoorsNumber, freeNumber){
    this.id = id*1;
    this.name = name+'';
    this.cost = cost*1;
    this.costForDoorsNumber = costForDoorsNumber*1;
    this.freeNumber = freeNumber*1;
}

//↓размеры стандартных проемов↓
function StandartSizes(id, doorsNumber, minWidth, maxWidth){
    this.id = id;
    this.doorsNumber = doorsNumber;
    this.minWidth = minWidth;
    this.maxWidth = maxWidth;
}
//↑размеры стандартных проемов↑

//↓стандартные цены↓
function StandartPrice(id, mark, material, price){
    this.id = id;
    this.mark = mark;
    this.material = material;
    this.price = price;
}
//↑стандартные цены↑

//↓нестандартные цены↓
function OriginalPrice(id, mark, material, price){
    this.id = id;
    this.mark = mark;
    this.material = material;
    this.price = price;
}
//↓нестандартные цены↓

//↓элементы пользовательского ввода↓
function calcElement(number,id){
    this.number = number;
    this.id = id;
    this.element = {};
    
    this.setElement = function(){
        this.element = document.getElementById(this.id);
    }
}
//↑элементы пользовательского ввода↑

//↓конструктор объекта входных данных↓
function InputData(){
    this.marks = [];
    this.colors = [];
    this.materials = [];
    this.standartSizes = [];
    this.standartPrices = [];
    this.originalPrices = [];
    this.minHeight = 0;
    this.maxHeight = 0;
    this.standartMaxHeight = 0;
    this.calcElements = [];
    this.delivery = [];
    
    //возвращает массив объектов, требующих на вход только id, name
    this.createSimpeObjArr = function (array, constructor){
        var arrayOfObjects = [];
        for (var i in array){
            arrayOfObjects[i] = new constructor(i*1, array[i]);
        }
        return arrayOfObjects;
    }
    
    //возвращает массив объектов типа StandartPrice или OriginalPrice
    this.createPriceObjArr = function (priceArr, constructor){
        var priceObjArr = [];
        for(pi in priceArr){
            priceObjArr[pi] = new constructor(
                                              pi*1,
                                              this.marks[priceArr[pi][0]],
                                              this.materials[priceArr[pi][1]],
                                              priceArr[pi][2]
                                             );
        }
        return priceObjArr;
    }
    
    //возвращает массив объектов типа calcElement
    this.createCalcElementArr = function(elementArr, constructor){
        var elementObjArr = [];
        for(ei in elementArr){
            elementObjArr[ei] = new constructor(elementArr[ei][0],elementArr[ei][1]);
            elementObjArr[ei].setElement();
        }
        return elementObjArr;
    }
    
    /*Возвращает массив объектов типа StandartSizes
        array - подготовительный массив стандартных размеров типа:
            [[кол.дверей,мин.ширина,макс.ширина],[кол.дверей,мин.ширина,макс.ширина],...]
        constructor - StandartSizes
    */
    this.createStandartSizes = function (minHeight, maxHeight, standartMaxHeight, array, constructor){
        var standartSizesObjArr = [];
        for (var pi in array){
            standartSizesObjArr[pi] = new constructor(
                                                      pi*1,
                                                      //minHeight,
                                                      //maxHeight,
                                                      array[pi][0],
                                                      array[pi][1],
                                                      array[pi][2]
                                                      );
        }
        this.standartSizes = standartSizesObjArr;
        this.minHeight = minHeight;
        this.maxHeight = maxHeight;
        this.standartMaxHeight = standartMaxHeight;
        return true;
    }
    
    this.createDeliveryArr = function(array, constructor){
        var deliveryObjArr = [];
        for (var di in array){
            deliveryObjArr[di] = new constructor(
                                                      array[di][0],
                                                      array[di][1],
                                                      array[di][2],
                                                      array[di][3],
                                                      array[di][4]
                                                      );
        }
        return deliveryObjArr;
    }
    //добавляет объектам типа calcElement значение свойства element (DOM элемент)
    this.setCalcElements = function(){
        for(var i in this.calcElements){
            this.calcElements[i].setElement();
        }
    }
    
    /*добавляет массивы объектов типа Color объектам типа Mark
        array - подготовительный массив цветов типа: 
            [[код цвета, код цвета, ...],[код цвета, код цвета, ...],...]
    */
    this.setColorMarks = function(array){
        for(var pmi in this.marks){
            for(var pi in prepareArr[pmi]){
                this.marks[pmi].markColors[pi] = this.colors[prepareArr[pmi][pi]];
            }
        }
        return true;
    }
    
    //возвращает номер текущего элемента в массиве объектов типа calcElement
    this.getCurrCalcElementNumber = function(elementId){
        for(var i in this.calcElements){
            if (this.calcElements[i].id==elementId)
                return this.calcElements[i].number; //дописать исключения
        }   
    }
    
    //возвращает текущий элемент в массиве объектов типа calcElement
    this.getCurrCalcElement = function(elementId){
        for(var i in this.calcElements){
            if (this.calcElements[i].id==elementId)
                return this.calcElements[i].element; //дописать исключения
        }   
    }
    
    /* возвращает массив валидных элементов + элемент, следующий за последним валидным
        validatorObj - объект типа Validator
        elementId - id текущего элемента
    */
    this.getEnebleElementsArr = function(elementId, validatorObj){
        currElementNumber = this.getCurrCalcElementNumber(elementId);      
        var enableElementArr = [];                                         
        var elCounter=1;                                                   
        for(var i in this.calcElements){                                   
            if (this.calcElements[i].number==currElementNumber+elCounter){
                if(validatorObj.getValidById(this.calcElements[i].id)){
                   enableElementArr[elCounter] = this.calcElements[i].id;
                   elCounter++;
                }else{
                    enableElementArr[elCounter] = this.calcElements[i].id;
                    return enableElementArr;
                }
            }
        }return enableElementArr;
    }
    
    //возвращает количество дверей в зависимости от ширины проема
    this.getDoorsNumber = function(doorwayWidth){
        for (var i in this.standartSizes){
            if(doorwayWidth > this.standartSizes[i].maxWidth) continue;
            else{
                return this.standartSizes[i].doorsNumber;
            }
        }
    }
    
    //возвращает минимально допустимую ширину проема
    this.getMinWidth = function(){
        for(var i in this.standartSizes){
            if(this.standartSizes[i].doorsNumber == 1)
                return this.standartSizes[i].minWidth;
        }
    }
    
    this.getMaxWidth = function(){
        var maxWidthNumber = 0;
        for(var i in this.standartSizes){
            if(this.standartSizes[i].doorsNumber > maxWidthNumber)
                maxWidthNumber = this.standartSizes[i].doorsNumber;
        }
        for(var i in this.standartSizes){
            if(this.standartSizes[i].doorsNumber == maxWidthNumber)
                return this.standartSizes[i].maxWidth;
        }
    }
    
    //возвращает массив цветов для конкретной марки профиля
    this.getMarkColors = function(markId){
        for(var i in this.marks){
            if(this.marks[i].id == markId)
                return this.marks[i].markColors;
        }
    }
    
    this.getDelivery = function(deliveryId){
        for(var i in this.delivery){
            if(this.delivery[i].id == deliveryId)
                return this.delivery[i];
        }
    }
}
//↑конструктор объекта входных данных↑

//↑конструкторы входных данных↑

//↓конструктор шкаф купэ↓
function ShkafKupe(){
    this.profileMark = null;
    this.profileColor = null;
    this.doorsMaterial = null;
    this.doorwayWidth = null;
    this.doorwayHeight = null;
    this.doorsNumber = null;
    this.price = null;
    this.original = false;
    this.delivery = null;
    
    this.setOriginal = function(doorsNumber, standartMaxHeight){
        if(this.doorsNumber<doorsNumber || this.doorwayHeight>standartMaxHeight) this.original = true;
        else this.original = false;
    }
    this.setPrice = function(standartPrices,originalPrices){
        var priceList = [];
        var price = 0;
        
        if (this.original) priceList = originalPrices;
        else priceList = standartPrices;
        
        for (var mi in this.doorsMaterial){
            for(var pli in priceList){
                if(priceList[pli].mark.id == this.profileMark && priceList[pli].material.id==this.doorsMaterial[mi]) 
                    price += priceList[pli].price;
            }
        }
        
        console.log(price);
        var montazhMoreCost = 0;
        
        if((this.doorsNumber - this.delivery.freeNumber)>0)
            montazhMoreCost = this.delivery.costForDoorsNumber * (this.doorsNumber - this.delivery.freeNumber);
        price += this.delivery.cost + montazhMoreCost;
        console.log(montazhMoreCost);
        console.log(price);
        this.price = price;
    }
    this.updateMaterialsArr = function(str){
        doorId = str.slice(1,2);
        materialId = str.slice(2);
        this.doorsMaterial[doorId] = materialId*1;
    };
}
//↑конструктор шкаф купэ↑

/*function Profile(){
    this.id = -1;
    this.name = '';
    this.material = '';
    this.mark = '';
    this.color = '';
}*/

/*↓конструктор проверки пользовательских данных↓*/
function Validator(){
    this.profileMark = [false, 'profileMark'];
    this.profileColor = [false, 'profileColor'];
    //this.doorsMaterial = [true, 'doorsMaterial'];
    this.doorwayWidth = [false, 'doorwayWidth'];
    this.doorwayHeight = [false, 'doorwayHeight'];
    this.doorsNumber = [false, 'doorsNumber'];
    
    this.checkProfileMark = function(val){
        val=val*1;
        if(!isNaN(val)){
            this.profileMark[0] = true;
            return true;
        }else{
            this.profileMark[0] = false;
            return false;
        }
    }
    this.checkProfileColor = function(val){
        val=val*1;
        if(!isNaN(val)){
            this.profileColor[0] = true;
            return true;
        }else{
            this.profileColor[0] = false;
            return false;
        }
    }
    /*this.checkDoorsMaterial = function(){
        
    }*/
    this.checkDoorwayWidth = function(val, minWidth, maxWidth){
        val = val*1;
        if (!isNaN(val) && val>=minWidth && val<=maxWidth) {
            this.doorwayWidth[0] = true;
            return true;
        }else{
            this.doorwayWidth[0] = false;
            return false;
        }
    }
    this.checkDoorwayHeight = function(val, minHeight, maxHeight){
        val = val*1;
        if (!isNaN(val) && val>=minHeight &&val<=maxHeight) {
            this.doorwayHeight[0] = true;
            return true;
        }else{
            this.doorwayHeight[0] = false;
            return false;
        }
    }
    this.checkDoorsNumber = function(val){
        val = val*1;
        if (!isNaN(val)) {
            this.doorsNumber[0] = true;
            return true;
        }else{
            this.doorsNumber[0] = false;
            return false;
        }
    }
    this.checkValids = function(){
        for(var i in this){
            if (typeof this[i] == 'object'){
                if(!this[i][0]) return false;
            };
        }
        return true;
    }
    this.getValidById = function(elId){
        for(var i in this){
            if(typeof this[i] == 'object'){
                if(this[i][1] == elId) return this[i][0];
            }
        }
    }
}
/*↑конструктор проверки пользовательских данных↑*/