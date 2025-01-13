import { Article } from "@/types"

export const articles: Article[] = [
    {
        id: "1",
        slug: "building-scalable-cloud-infrastructure",
        title: "Building Scalable Cloud Infrastructure",
        excerpt: "Learn about best practices for designing and implementing cloud-native applications that can scale effectively.",
        content: `
# Building Scalable Cloud Infrastructure

Cloud infrastructure is the backbone of modern applications. In this article, we'll explore best practices for building scalable cloud infrastructure that can grow with your needs.

## Key Principles

### 1. Infrastructure as Code

Using Infrastructure as Code (IaC) is essential for maintaining consistent and reproducible deployments. Here's an example using Terraform:

\`\`\`hcl
resource "aws_eks_cluster" "main" {
  name     = "main-cluster"
  role_arn = aws_iam_role.eks_cluster.arn

  vpc_config {
    subnet_ids = var.subnet_ids
  }
}
\`\`\`

### 2. Containerization

Containerization helps ensure consistency across different environments. Here's a simple Dockerfile example:

\`\`\`dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]
\`\`\`

## Best Practices

1. Use auto-scaling groups
2. Implement proper monitoring
3. Follow the principle of least privilege
4. Regular backup and disaster recovery testing

Remember that scalability isn't just about handling more load - it's about maintaining performance and reliability as your system grows.
    `,
        author: "Philip Solarz",
        date: "2024-01-10",
        readingTime: "5 min read",
        tags: ["Cloud", "Infrastructure", "DevOps", "AWS"]
    },
    {
        id: "2",
        slug: "kubernetes-best-practices",
        title: "Kubernetes Best Practices for Production",
        excerpt: "Essential best practices and patterns for running Kubernetes in production environments.",
        content: `
# Kubernetes Best Practices for Production

Running Kubernetes in production requires careful planning and adherence to best practices. Let's explore key considerations and patterns.

## Security Considerations

### 1. Pod Security Policies

Always implement pod security policies to control pod execution:

\`\`\`yaml
apiVersion: policy/v1beta1
kind: PodSecurityPolicy
metadata:
  name: restricted
spec:
  privileged: false
  seLinux:
    rule: RunAsAny
  runAsUser:
    rule: MustRunAsNonRoot
  fsGroup:
    rule: RunAsAny
\`\`\`

### 2. Network Policies

Implement network policies to control pod-to-pod communication:

\`\`\`yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: api-allow
spec:
  podSelector:
    matchLabels:
      app: api
  ingress:
  - from:
    - podSelector:
        matchLabels:
          app: frontend
\`\`\`

## Resource Management

1. Always set resource requests and limits
2. Use horizontal pod autoscaling
3. Implement proper monitoring and alerting
4. Regular backup of etcd

Remember that Kubernetes is just a tool - success depends on how well you use it.
    `,
        author: "Philip Solarz",
        date: "2024-01-05",
        readingTime: "7 min read",
        tags: ["Kubernetes", "DevOps", "Container", "Security"]
    }
]

