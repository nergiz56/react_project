export default function TabButton ({ onSelect, children, isSelected}){
// fonksiyon içinde fonksiyon kullanabiliriz!
// Evet, onClick bir butona tıklanınca belirli bir fonksiyonun çalışmasını sağlar.
// isSelected -> seçili olan butonumuz
//Eğer isSelected true ise, butona "active" sınıfını ekler. Değilse, sınıf tanımlanmaz.

    return(
        <li>
            <button className={ isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
        </li>

    );
}
