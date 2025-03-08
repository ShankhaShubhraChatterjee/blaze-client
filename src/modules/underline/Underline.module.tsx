const Hr = (props: any) => {
    return (
        <hr
            className="custom__horizontal--line"
            style={{
                width: props.width,
                height: props.height,
                backgroundColor: props.color,
            }}
        />
    )
}
export default Hr
