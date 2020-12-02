import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

export function GameScreenshots()
{
    return <>
            <Zoom>
                <img src={"screenshots/super-bogus-world-2-1.png"} alt={"Sasdasd"} width={"300px"} />
            </Zoom>
        <section>
            <Zoom>
                <img src={"screenshots/super-bogus-world-2-2.png"} alt={"Sasdasd"} width={"100px"} />
            </Zoom>
            <Zoom>
                <img src={"screenshots/super-bogus-world-2-3.png"} alt={"Sasdasd"} width={"100px"} />
            </Zoom>
            <Zoom>
                <img src={"screenshots/super-bogus-world-2-4.png"} alt={"Sasdasd"} width={"100px"} />
            </Zoom>
        </section>
    </>
}