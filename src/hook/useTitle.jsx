import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} |  College Admissions Counseling Services `;
    }, [title])
};

export default useTitle;