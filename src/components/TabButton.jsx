export default function TabButton ({children, onSelect}){
// fonksiyon içinde fonksiyon kullanabiliriz!

    return(
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>

    );
}
