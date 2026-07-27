import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://megchufjkmtvuxsesmnb.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1lZ2NodWZqa210dnV4c2VzbW5iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUzNTYzMjAsImV4cCI6MjA2MDkzMjMyMH0.x0-t0aL0cY5nsqFQdQeq5ec0c7Ki5KgQfy0xjQ5sW0k";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type UserRole = "client" | "staff" | "admin" | "super_admin";

export async function getCurrentUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}

export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;
  return data;
}

export async function signUp(email: string, password: string, firstName: string, lastName: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { first_name: firstName, last_name: lastName } },
  });
  if (error) throw error;
  return data;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}