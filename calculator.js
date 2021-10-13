//classta üretilecek değerlere ilk değer ataması yapmak için 
//constructor kullandım
//constructor objeleri ilk kullanıma hazırlar
//React class component state mantığı
class App{
  constructor(previousStateText,currentStateText){
      this.previousStateText = previousStateText; //objeye ulaşmak için this kullandık
      this.currentStateText = currentStateText;  //this global scopeda kullanılabilir
      this.clear(); //clear fonksyionun constructor içinde çağırdım
  }
  //statte operatorlerin başlangıç değerini boş bıraktım ve temizledim
  clear(){
      this.currentState ='';
      this.previousState ='';
      
  }
  //butona tıklandığında tıklanan değeri current state atıp ekrana basıcam
  addNumber(number){
      this.currentState = this.currentState.toString() + number.toString();
  }

  addOperation(choseOperation){
      this.choseOperation = choseOperation;
      this.previousState = this.currentState;
       this.currentState='' //currentState içini temizlemezsen operatöre bastıktan sonra current içindeki değer kaybolmaz
  }
  //state içindeki texti güncelleyecek olan fonksiyon
  updateDisplay(){
      this.currentStateText.innerText = this.currentState; //state tutulan değeri currentState attım;
      this.previousStateText.innerText = this.previousState; //state tutulan değeri previousState attım;
  }

}

const numberButtons = document.querySelectorAll('[col-number]');
const operationButtons = document.querySelectorAll('[col-operation]');
const previousStateText = document.querySelector('[col-previous-value ]');
const currentStateText = document.querySelector('[col-current-value]');


//App clasına bağlı yeni bir nesne oluşturdum
//this oluşturulacak nesneyi ifade eder
const app = new App(previousStateText,currentStateText); 

//butonları döndüm ve her butonu dinleyerek clikc eventi çalıştığında değerini
//butonun innert textine yazdım 
//addNumber fonksiyonundaki buton parametresini gönderdim
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    app.addNumber(button.innerText)
    app.updateDisplay()
  })
})


//operatör butonlarını dönüp butonlarda yaptığım aynı işlemleri yazdırıcam
numberButtons.forEach(button=>{
    button.addEventListener('click',()=>{
        app.addOperation(button.innerText)
        app.updateDisplay()
    })
})
