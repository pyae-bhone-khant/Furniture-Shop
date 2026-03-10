import DOMPurify from "isomorphic-dompurify";
interface props extends React.HtmlHTMLAttributes<HTMLDivElement> {
    content : string;
}
export default function RichText({content , className}: props) {
    const sanitizedContent =  DOMPurify.sanitize(content);
    return (
        <div dangerouslySetInnerHTML={{__html : sanitizedContent}} className={className} />
    )
}