import {KeyboardArrowDownRounded, KeyboardArrowUpRounded} from '@mui/icons-material'

export default function ArrowPostion({ direction }) {
    if (!direction) {
        return <></>
    }

    if (direction === 'desc') {
        return <KeyboardArrowDownRounded className="text-theme-blue-medium"/>
    } else {
        return <KeyboardArrowUpRounded className="text-theme-blue-medium"/>
    }
}