import ContentLoader from "react-content-loader";


export default function Loaders(props:any) {
    let loading:any[] = [];
    
    [1, 2, 3, 4].forEach((it, i) => {
        loading.push(
            <ContentLoader key={'palestras' + i} speed={2} width={550} height={180} viewBox="0 0 500 180" backgroundColor="#f2f2f2" foregroundColor="#e8e8e8" {...props}>
                <rect x="27" y="18" rx="0" ry="0" width="187" height="187" />
                <rect x="233" y="23" rx="2" ry="2" width="103" height="10" />
                <rect x="234" y="45" rx="2" ry="2" width="169" height="19" />
                <rect x="234" y="172" rx="10" ry="10" width="96" height="29" />
                <rect x="236" y="115" rx="2" ry="2" width="167" height="7" />
                <rect x="237" y="131" rx="2" ry="2" width="167" height="7" />
                <rect x="236" y="97" rx="2" ry="2" width="167" height="7" />
            </ContentLoader>
        )
    })

    return loading;
}