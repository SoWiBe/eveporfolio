export const Container = ({children}: { children: React.ReactNode}) => (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px'}}>
        {children}
    </div>
)