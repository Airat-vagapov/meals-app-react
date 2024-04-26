export default function TextLink({ children, link }) {

    return (
        <a className={'textLink'} href={link}>{children}</a>
    )
}