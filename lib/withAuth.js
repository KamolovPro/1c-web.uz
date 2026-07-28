import { getSession } from './auth'
import { getUserById, publicUser } from './mockDb'

// Обёртка для getServerSideProps защищённых страниц кабинета.
// Проверяет сессию, подгружает пользователя и передаёт его в props.
// Неавторизованных редиректит на /login.
//
//   export const getServerSideProps = withAuth(async (ctx, user) => {
//     return { props: { ... } }
//   })
export function withAuth(handler) {
  return async (ctx) => {
    const session = getSession(ctx.req)
    const user = session ? getUserById(session.uid) : null
    if (!user) {
      return {
        redirect: {
          destination: `/login?next=${encodeURIComponent(ctx.resolvedUrl || '/cabinet')}`,
          permanent: false,
        },
      }
    }
    const safeUser = publicUser(user)
    if (!handler) return { props: { user: safeUser } }
    const result = await handler(ctx, user)
    if (result.redirect || result.notFound) return result
    return { ...result, props: { user: safeUser, ...(result.props || {}) } }
  }
}
