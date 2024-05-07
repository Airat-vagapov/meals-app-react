export default function TextLink({ children, link, mt }) {
    let mtClassName
    if (mt) mtClassName = 'textLink--mtAuto'
    return (
        <a className={`textLink ${mtClassName}` } href={link}>{children}</a>
    )
}