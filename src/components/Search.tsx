type SearchProps = {
    text: string;
    onChange: (text:string) => void;
}

export const Search = ({text, onChange}:SearchProps) => {
    return (
        <div>
            <input type="text" placeholder="Search..." value={text} onChange={(e) => onChange(e.target.value)}/>
        </div>
    )
}
