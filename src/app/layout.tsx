import StoreProvider from 'app.store/StoreProvider';
import Header from 'app.components/Header';
import ReactQueryProvider from 'app.components/ReactQueryProvider';
import StyledComponentsRegistry from 'app.styled/StyledComponentsRegistry';
import { GlobalStyle } from 'app.styled';

export const metadata = {
  title: 'Next.js v13 서버 컴포넌트 app 디렉토리',
  description: 'Next.js v13 서버 컴포넌트 app 디렉토리 예제',
};

/**
 * 각종 설정 및 필요시 Global Store 데이터를 가져온다.
 */
const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head />
      <body>
        <StyledComponentsRegistry>
          <StoreProvider>
            <ReactQueryProvider>
              <GlobalStyle />
              <Header />
              {children}
            </ReactQueryProvider>
          </StoreProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
