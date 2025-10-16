import { toast as sonner } from 'sonner'

const variantClasses = {
  success: 'bg-green-600 text-white border border-green-700',
  error: 'bg-red-600 text-white border border-red-700',
}

function base(title: string, description?: string) {
  return sonner(title, { description })
}

function success(title: string, description?: string) {
  return sonner.success(title, {
    description,
    className: variantClasses.success,
  })
}

function error(title: string, description?: string) {
  return sonner.error(title, {
    description,
    className: variantClasses.error,
  })
}

const toast = Object.assign(base, {
  success,
  error,
})

export default toast
