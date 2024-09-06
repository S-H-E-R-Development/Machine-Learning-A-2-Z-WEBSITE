export default function Hline({ color: lcolor }) {
    return <hr
        style={{
            background: lcolor,
            color: lcolor,
            borderColor: lcolor,
            height: '1px',
            width: '100%', // Wrap the percentage value in quotes
            position: "sticky",
            marginTop: '70px',
            zIndex: 1000,
        }}
    />
}