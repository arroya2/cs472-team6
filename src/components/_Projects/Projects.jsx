export default function Projects({options}) {

    const {Title, Highlight, gradient, Description, Projects} = options;

    return (
        <div className="mx-auto w-[340px] md:w-[740px] lg:w-[1200px]">
            <div className="mb-[32px] md:w-[560px] lg:w-[1200px] lg:flex lg:flex-row lg:justify-between">
                <div className="text-[32px] md:text-[56px] lg:text-[64px]">
                    <p className="dark:text-white font-main">
                        {Title}
                    </p>
                    <p className={`break-words bg-gradient-to-r ${gradient} inline-block text-transparent bg-clip-text font-main`}>
                        {Highlight}
                    </p>
                </div>
                <div className="h-[32px]"></div>
                <div className="dark:text-white font-secondary text-[16px] md:text-[18px] lg:w-[560px] lg:my-auto">
                    {Description}
                </div>
            </div>
            <div className="flex max-w-[1200px] flex-wrap">
                {Projects?.map((ProjectItems, index) => <ProjectItem key={index} ProjectItems={ProjectItems} />)}
            </div>
        </div>
    )
}

function ProjectItem({ProjectItems}) {
    const { Title, Description, Picture, URL } = ProjectItems;
    return (
        <div className="w-[340px] h-[370px] lg:h-[587px] lg:w-[560px] dark:bg-gray-700 bg-gray-400 rounded-xl mx-auto my-[40px]">
            <a href={URL} target="_blank">
                <img className="mx-auto h-[242px] lg:h-[400px]" src={Picture}></img>
            </a>
            <div className="h-[128px] lg:h-[187px] dark:bg-gray-900 bg-gray-100">
                <div className="dark:text-white font-main p-[19px] lg:p-[42px]">
                    <div className="text-[26px] lg:text-[32px]">
                        {Title}
                    </div>
                    <div className="text-[18px]">
                        {Description}
                    </div>
                </div>
            </div>
        </div>
    )
}