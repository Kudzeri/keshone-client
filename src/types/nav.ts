export interface NavItem {
  label: string;
  path: string;
  authOnly?: boolean; 
  guestOnly?: boolean;  
}