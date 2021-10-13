//classta üretilecek değerlere ilk değer ataması yapmak için
//constructor kullandım
//constructor objeleri ilk kullanıma hazırlar
//React class component state mantığı
class App {
  constructor(previousStateText, currentStateText) {
    this.previousStateText = previousStateText //objeye ulaşmak için this kullandık
    this.currentStateText = currentStateText //this global scopeda kullanılabilir
    this.clear() //clear fonksyionun constructor içinde çağırdım
  }
  //statte operatorlerin başlangıç değerini boş bıraktım ve temizledim
  clear() {
    this.currentState = ''
    this.previousState = ''
    this.choseOperation = ''
  }
  //butona tıklandığında tıklanan değeri current state atıp ekrana basıcam
  addNumber(number) {
    //birden fazla , ekleme hatası includes ile olup olmadığını kontrol ederek
    if (number === '.' && this.currentState.includes('.')) return
    this.currentState = this.currentState.toString() + number.toString()
  }

  addOperation(choseOperation) {
    //ikinci operatör seçildiğinde previous statedeki değer kaybolmaması için
    if (this.currentState === '') return
    if (this.previousState !== '') {
      this.total()
    }
    this.choseOperation = choseOperation
    this.previousState = this.currentState
    this.currentState = '' //currentState içini temizlemezsen operatöre bastıktan sonra current içindeki değer kaybolmaz
  }
  //state içindeki texti güncelleyecek olan fonksiyon
  updateDisplay() {
    this.currentStateText.innerText = this.currentState //state tutulan değeri currentState attım;

    // this.previousStateText.innerText = this.previousState
    //PreviousStatede operatörü yanına getireceğim koşul
    if (this.choseOperation != null) {
      //yani seçili bir işlem operatörü varsa
      this.previousStateText.innerText = `${this.previousState} ${this.choseOperation}`
    }
  }

  total() {
    let total
    //parse float parametreyi ondalıklı olarak döndürür
    const prev = parseFloat(this.previousState)
    const current = parseFloat(this.currentState)
    //isNan metodu ile değişken içeriğinin rakam olup olmadığını kontrol ettim
    //boolean döndürür
    if (isNaN(prev) || isNaN(current)) return
    switch (this.choseOperation) {
      case '+':
        total = prev + current
        break
      case '-':
        total = prev - current
        break
      case '*':
        total = prev * current
        break
      case '/':
        total = prev / current
        break
    }
    this.currentState = total
    //undefined tanımladık çünkü eski statedeki değeri tutuyor ve sonrasında değişmeyeceği belli değil
    this.choseOperation = undefined
    this.previousState = ''
  }
}

const numberButtons = document.querySelectorAll('[col-number]')
const operationButtons = document.querySelectorAll('[col-operation]')
const equalButton = document.querySelector('[col-equals]')
const acButton = document.querySelector('[col-clear]')
const previousStateText = document.querySelector('[col-previous-value ]')
const currentStateText = document.querySelector('[col-current-value]')

//App clasına bağlı yeni bir nesne oluşturdum
//this oluşturulacak nesneyi ifade eder
const app = new App(previousStateText, currentStateText)

//butonları döndüm ve her butonu dinleyerek clikc eventi çalıştığında değerini
//butonun innert textine yazdım
//addNumber fonksiyonundaki buton parametresini gönderdim
numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    app.addNumber(button.innerText)
    app.updateDisplay()
  })
})

//operatör butonlarını dönüp butonlarda yaptığım aynı işlemleri yazdırıcam
operationButtons.forEach((button) => {
  button.addEventListener('click', () => {
    app.addOperation(button.innerText)
    app.updateDisplay()
  })
})

//Eşittir işlemi
equalButton.addEventListener('click', (button) => {
  app.total(), app.updateDisplay()
})

acButton.addEventListener('click', (button) => {
  app.clear()
  app.updateDisplay()
})
