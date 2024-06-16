---
title: "Tổng hợp các câu lệnh hay dùng nhất Kubenetes | Kubernetes Cheat Sheet"
datePublished: Sun Jun 16 2024 16:19:21 GMT+0000 (Coordinated Universal Time)
cuid: clxhr4sc4000109l3eh0sblzg
slug: tong-hop-cac-cau-lenh-hay-dung-nhat-kubenetes-kubernetes-cheat-sheet
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1718554158732/1eb63311-1348-4fd7-8932-51f19b9c8c29.png
tags: kubernetes, devops, cheatsheet, k8s

---

## Cluster Management

1. Display endpoint details for the cluster’s master and services.
```bash
kubectl cluster-info
```

2. Show the Kubernetes version that is active on
the server and client
```bash
kubectl version
```

3. Get the cluster’s configuration
```bash
kubectl config view
```

4. List the available API resources
```bash
kubectl api-resources
```

5. List everything
```bash
kubectl get all --all-namespaces
```

## Node Management
1. List the nodes
```bash
kubectl get node
```

2. Update the taints on nodes
```bash
kubectl taint node <node_name>
```

3. Delete a node
```bash
kubectl delete node <node_name>
```

## Pod Management

1. List pods
```bash
kubectl get pod
```

2. Delete a pod
```bash
kubectl delete pod <pod_name>
```

3. See detailed state of a pods
```bash
kubectl describe pod <pod_name>
```

4. Create a pod
```bash
kubectl create pod <pod_name>
```

5. Run a command for a container inside a pod
```bash
kubectl exec <pod_name> -c <container_name> <command>
```

6. Get interactive shell on a pod
```bash
kubectl exec -it <pod_name> /bin/sh
```

7. See resource usage (CPU/Memory/Storage) for pods
```bash
kubectl top pod
```

8. Add/update the annotations of a pod
```bash
kubectl annotate pod <pod_name> <annotation>
```

9. Add/update the label of a pod
```bash
kubectl label pod <pod_name>
```

## Replication Controllers
1. View the list of replication controllers
```bash
kubectl get rc
```

2. View the list of replication controllers by namespace
```bash
kubectl get rc --namespace="<namespace_name>"
```

3. Scale a ReplicaSet
```bash
kubectl scale --replicas=<expected_replica_num> replicaset <name>
```

## Deployment Management

1. List the deployments
```bash
kubectl get deployment
```

2. Show the precise status of single or multiple deployments.
```bash
kubectl describe deployment <deployment_name>
```

3. Edit and update the deployment.
```bash
kubectl edit deployment <deployment_name>
```

4. Create a new deployment
```bash
kubectl create deployment <deployment_name>
```

5. Delete a deployment
```bash
kubectl delete deployment <deployment_name>
```

6. Check the rollout status of a deployment
```bash
kubectl rollout status deployment <deployment_name>
```

7. Display Resource usage (CPU/Memory/Storage) for nodes
```bash
kubectl top node
```

8. See resource allocation per node
```bash
kubectl describe nodes | grep Allocated -A 5
```

9. List the pods running on a node
```bash
kubectl get pods -o wide | grep <node_name>
```

10. To annotate a node
```bash
kubectl annotate node <node_name>
```

11. Add or update the labels of a node
```bash
kubectl label nodes <your-node-name> <label>
```

12. Scale a Deployment
```bash
kubectl scale deployment <deployment-name> --replicas=<number-of-replicas>
```

## Secrets

1. Create a secret
```bash
kubectl create secret <name>
```

2. List secrets
```bash
kubectl get secrets
```

3. View details about secrets
```bash
kubectl describe secrets <name>
```

4. Delete a secret
```bash
kubectl delete secret <secret_name>
```

## Services

1. List the services
```bash
kubectl get services
```

2. View the detailed state of a service
```bash
kubectl describe services <name>
```

3. Expose a replication controller, deployment or pod as a new Kubernetes service
```bash
kubectl expose deployment [deployment_name]
```

4. Edit/update the definition of a service
```bash
kubectl edit service <name>
```

## Common Options
Commands in Kubectl can include optional flags.
Here are a few examples of the most popular and helpful ones.

1. –o Format of output. (Suppose you wanted to list all of the pods in ps output format with additional information.)
```bash
kubectl get pods -o wide
```

2. Create any resource(pod/replicaset/deployment, etc) using a yaml/json file.
```bash
kubectl apply -f <xyz.yaml>
```

## Sources

* K21Academy - KUBERNETES CHEATSHEET