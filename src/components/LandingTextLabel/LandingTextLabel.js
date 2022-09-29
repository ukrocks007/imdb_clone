import './LandingTextLabel.css';

function LandingTextLabel({
    text
}) {
    return (<>
        <div className='textLabels'>
            { text }
        </div><br />
    </>);
}

export default LandingTextLabel;