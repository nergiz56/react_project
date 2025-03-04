export default function TabButton ({children, onSelect}){
// fonksiyon içinde fonksiyon kullanabiliriz!
// Evet, onClick bir butona tıklanınca belirli bir fonksiyonun çalışmasını sağlar.


    return(
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>

    );
}
