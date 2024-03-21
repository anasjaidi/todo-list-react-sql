import { ReactNode, UIEventHandler, useCallback, useState } from 'react';

interface ListVirtualizationProps {
    items: ReactNode[];
    itemHeight: number;
    numberOfItems: number;
}

function ListVirtualization({ items, itemHeight, numberOfItems }: ListVirtualizationProps) {
    const outerHeight = itemHeight * numberOfItems;
    const innerHeight = itemHeight * items.length;

    const [scrollTop, setScrollTop] = useState(0);

    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = Math.min(
        items.length,
        Math.floor((scrollTop + outerHeight) / itemHeight)
    );

    const visibleItems = items.slice(startIndex, endIndex + 1);

    const handleScroll = useCallback<UIEventHandler<HTMLDivElement>>((e) => {
        setScrollTop(e.currentTarget.scrollTop);
    }, [])

    return (
        <div
            style={{
                overflowY: 'scroll',
                border: '1px solid black',
                height: outerHeight + 'px',
            }}
            onScroll={handleScroll}
        >
            <div style={{ height: innerHeight + 'px', position: 'relative' }}>
                <div style={{ position: 'absolute', top: startIndex * itemHeight + 'px' }}>
                    {visibleItems}
                </div>
            </div>
        </div>
    );
}

export default ListVirtualization;
