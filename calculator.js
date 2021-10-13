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
  appendNumber(number){
      this.currentState = this.currentState.toString() + number.toString();
  }
  //state içindeki texti güncelleyecek olan fonksiyon
  updateDisplay(){
      this.currentStateText.innerText = this.currentState; //state tutulan değeri currentState attım;
  }

}

const numberButtons = document.querySelectorAll('[col-number]')
const previousStateText = document.querySelector('[col-previous-value ]')
const currentStateText = document.querySelector('[col-current-value]')


//App clasına bağlı yeni bir nesne oluşturdum
//this oluşturulacak nesneyi ifade eder
const app = new App(previousStateText,currentStateText); 

//butonları döndüm ve her butonu dinleyerek clikc eventi çalıştığında değerini
//butonun innert textine yazdım 
//addNumber fonksiyonundaki buton parametresini gönderdim

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    app.appendNumber(button.innerText)
    app.updateDisplay()
  })
})



