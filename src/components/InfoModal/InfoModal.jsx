import { InfoModalState } from "../../state";

export default function InfoModal() {

    const visible = InfoModalState((state) => state.visible);
    const setVisible = InfoModalState((state) => state.setVisible);

    return (
        <div
      className={`${
        visible ? "block" : "hidden"
        } fixed z-10 left-0 top-0 w-full h-full bg-black bg-black/40 flex items-center`}
        >
            <div className="w-4/5 h-3/5 max-w-[600px] bg-white mx-auto p-9 rounded-lg overflow-scroll relative">
                <button
                className="absolute top-4 right-4"
                onClick={() => setVisible(false)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 stroke-[3px]"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                <div>
                    <h2 className="font-bold">
                        How to Add Components:
                    </h2>
                    <p>
                        Selecting the Cube Button on the side panel will display a list of components.
                        Clicking any of these components will populate the preview with the selected 
                        component.
                    </p>
                </div>
                <br />    
                <div>
                    <h2 className="font-bold">
                        How to Customize Components:
                    </h2>
                    <p>
                        Selecting the List Button on the side panel will display components currently in the preview.
                        Expanding any of these components will show the components customizable features. These changes 
                        will be automatically applied and can be seen in the preview. In this tab you can also change the 
                        order of components and delete them. 
                    </p>
                </div>
                <br />    
                <div>
                    <h2 className="font-bold">
                        How to Customize Website Details:
                    </h2>
                    <p>
                        Selecting the Sliders Button on the side panel reveal the basic website information.
                        From here you can change the site's Title, Icon, Author, Description, and Language. 
                    </p>
                </div>
                <br />           
                <div>
                    <h2 className="font-bold">
                        How to Export Website:
                    </h2>
                    <p>
                        Clicking the Export Button in the top right corner of the page will 
                        lead you to the Export Modal. In this Modal, clicking the Export Website
                        Button will download a zip file. This zip file contains all files neccessary 
                        to host your website on a provider of your choosing. 
                    </p>
                </div>
                <br />
                <div>
                    <h2 className="font-bold">
                        How to Save Website Progress:
                    </h2>
                    <p>
                        Clicking the Export Button in the top right corner of the page will 
                        lead you to the Export Modal. In this Modal, clicking the Export Data
                        Button will download a JSON file. This JSON file can be used to resume your 
                        progress. 
                    </p>
                </div>
            </div>
        </div>
    )
}