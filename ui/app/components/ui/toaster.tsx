import {
    Toast,
    ToastClose,
    ToastDescription,
    ToastProvider,
    ToastTitle,
    ToastViewport,
  } from "~/components/ui/toast"
  import { useToast } from "~/components/ui/use-toast"
  import {FC} from 'react';
  
  interface toastProps {
    color: string;
  }
  
  const  Toaster: FC<toastProps> = (parentProps:toastProps) => {
    const { toasts } = useToast();
    return (
      <ToastProvider duration={2000}>
        {toasts.map(function ({ id, title, description, action, ...props }) {
          return (
            <Toast key={id} {...props} className={parentProps.color}>
              <div className="grid gap-1">
                {title && <ToastTitle>{title}</ToastTitle>}
                {description && (
                  <ToastDescription>{description}</ToastDescription>
                )}
              </div>
              {action}
              <ToastClose />
            </Toast>
          )
        })}
        <ToastViewport />
      </ToastProvider>
    )
  }
  export default Toaster;
  