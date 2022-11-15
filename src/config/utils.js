export const isAdmin = () => {
  const admin_token = localStorage.getItem('admin_token')
  return !!admin_token
}
